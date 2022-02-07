from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    # USERS
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('username/<str:username>',
         views.UserNameLookup.as_view(), name='user_detail'),

    # GAMES
    path('games/', views.GameList.as_view(), name='game_list'),
    path('games/<int:pk>', views.GameDetail.as_view(), name='game_detail'),

    # GENRES
    path('genres/', views.GenreList.as_view(), name='genre_list'),
    path('genres/<int:pk>', views.GenreDetail.as_view(), name='genre_detail'),

    # PLATFORMS
    path('platforms/', views.PlatformList.as_view(), name='platform_list'),
    path('platforms/<int:pk>', views.PlatformDetail.as_view(),
         name='platform_detail'),

    # REVIEWS
    path('reviews/', views.ReviewList.as_view(), name='review_list'),
    path('reviews/<int:pk>', views.ReviewDetail.as_view(), name='review_detail'),
]
