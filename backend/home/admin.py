from django.contrib import admin
from .models import Car, Users, Bookmarks

# Register your models here.
admin.site.register(Car)
admin.site.register(Users)
admin.site.register(Bookmarks)
