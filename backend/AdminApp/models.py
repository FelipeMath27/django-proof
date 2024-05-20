from django.db import models

# Create your models here.
class Admin(models.Model):
    num_id_admin = models.AutoField(primary_key=True)
    str_user_admin = models.CharField(max_length=10)
    str_pasw = models.CharField(max_length=254)

    class Meta:
        db_table = 'djn_tbl_admin'
        app_label = 'AdminApp' 