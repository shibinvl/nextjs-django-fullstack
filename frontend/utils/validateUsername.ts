export function validateUsername(username: string) {
    const pattern = /^[\w.@+-]{3,150}$/;
    return pattern.test(username); 
  }
  