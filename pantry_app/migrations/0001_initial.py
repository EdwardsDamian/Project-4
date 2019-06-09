# Generated by Django 2.2.2 on 2019-06-09 21:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=60)),
                ('address', models.CharField(default='', max_length=80)),
                ('city', models.CharField(default='', max_length=60)),
                ('state', models.CharField(default='', max_length=40)),
                ('zip_code', models.CharField(default='', max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingListItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveSmallIntegerField()),
                ('size', models.CharField(default='', max_length=20)),
                ('item', models.CharField(default='', help_text='Enter item or product name', max_length=40)),
                ('user', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='shopping_list_items', to='pantry_app.User')),
            ],
        ),
        migrations.CreateModel(
            name='PantryItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(default='', help_text='Enter item or product name', max_length=40)),
                ('is_perishable', models.BooleanField(default=True)),
                ('location', models.CharField(default='', max_length=40)),
                ('expiration_date', models.DateField(help_text='For produce w/o exp date consider adding 6 days to purchase date')),
                ('purchase_date', models.DateField()),
                ('user', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='pantry_items', to='pantry_app.User')),
            ],
        ),
    ]