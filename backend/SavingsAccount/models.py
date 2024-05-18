from django.db import models
from ClientApp.models import Client
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class SavingsAccount(models.Model):
    num_id_account = models.AutoField(primary_key=True)
    num_id_client = models.ForeignKey(Client, on_delete=models.CASCADE)
    num_amount_balance = models.IntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(99999999)
        ]
    )
    dtm_open_account = models.DateField()
    str_number_account = models.CharField(max_length=100)

    class Meta:
        db_table = 'djn_tbl_savings_accnt_clnt'
        app_label = 'SavingsAccount'

class Transaction(models.Model):
    num_id_transaction = models.AutoField(primary_key=True)
    num_id_account = models.ForeignKey(SavingsAccount, on_delete=models.CASCADE)
    str_type_transaction = models.CharField(max_length=10)
    dtm_transaction_date = models.DateField()
    num_amount_transaction = models.IntegerFiel(null=True, blank=True)

    class Meta:
        db_table = 'djn_tbl_transaction'
        app_label = 'SavingsAccount'