from django.urls import path
from api.views.auth_view import LoginView, MeView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('me/', MeView.as_view(), name='me'),
]
