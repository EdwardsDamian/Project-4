# Generated by Django 2.2.2 on 2019-06-09 23:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pantry_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', help_text='Enter item or product name', max_length=40)),
                ('description', models.CharField(default='', max_length=40)),
                ('size', models.CharField(default='', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Pantry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_perishable', models.BooleanField(default=True)),
                ('location', models.CharField(default='', max_length=40)),
                ('expiration_date', models.DateField(help_text='For produce w/o exp date consider adding 6 days to purchase date')),
                ('purchase_date', models.DateField()),
                ('item', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='pantry_item', to='pantry_app.Item')),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveSmallIntegerField()),
                ('item', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='shopping_list', to='pantry_app.Item')),
            ],
        ),
        migrations.RemoveField(
            model_name='shoppinglistitem',
            name='user',
        ),
        migrations.DeleteModel(
            name='PantryItem',
        ),
        migrations.DeleteModel(
            name='ShoppingListItem',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
