from django.http import JsonResponse
from django.conf import settings

class BlockNonApiClientsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        path = request.path
        origin = request.headers.get('Origin')
        x_requested_with = request.headers.get('X-Requested-With')

        getattr(settings, 'FRONTEND_ORIGINS', [])

        # Allow robots.txt and static file paths
        if path == "/robots.txt" or path.startswith("/static/"):
            return self.get_response(request)

        # Require all requests to go through /api/
        if not path.startswith('/api/'):
            return JsonResponse(
                {'error': 'Only /api/ routes are allowed.'},
                status=403
            )

        # Block if direct browser hit (no Origin or no X-Requested-With)
        if not origin or origin not in allowed_origins:
            if not x_requested_with or x_requested_with.lower() != 'xmlhttprequest':
                return JsonResponse(
                    {'error': 'Browser access blocked. Use your approved frontend.'},
                    status=403
                )

        return self.get_response(request)
