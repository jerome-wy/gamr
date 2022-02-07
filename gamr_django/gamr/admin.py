from django.contrib import admin
from .models import User, Game, Platform, Genre, Review

# Register your models here.
admin.site.register(User)
admin.site.register(Game)
admin.site.register(Platform)
admin.site.register(Genre)
admin.site.register(Review)
