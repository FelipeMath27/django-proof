from django.db import models

# Create your models here.
class Client(models.Model):
    num_id_client = models.AutoField(primary_key=True)
    str_fullname_client = models.CharField(max_length=200)
    str_type_identification = models.CharField(max_length=4)
    str_identification_number = models.CharField(max_length=20)
    str_email_client = models.CharField(max_length=200)
    str_state = models.CharField(max_length=3)

    class Meta:
        db_table = 'djn_tbl_client'
        app_label = 'ClientApp' 

class Password(models.Model):
    num_id_pswrd = models.AutoField(primary_key=True)
    num_id_client = models.ForeignKey(Client, on_delete=models.CASCADE)
    str_paswrd_client = models.CharField(max_length=100)

    class Meta:
        db_table = 'djn_tbl_psw'
        app_label = 'ClientApp'