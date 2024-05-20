from hashlib import sha256

def HashPassword(pswd):
    hash_pasw = sha256(pswd.encode()).hexdigest()
    return hash_pasw