from sysconfig import get_path_names
from rest_framework import serializers
from .models import User, Game, Review, Platform, Genre


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'description', 'release_date',
                  'developer', 'storage_req', 'trailer', 'cover']


class UserSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password',
                  'email', 'first_name', 'last_name', 'games']


class GenreSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = ['id', 'genre', 'games']


class PlatformSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)
    genres = GenreSerializer(many=True, read_only=True)

    class Meta:
        model = Platform
        fields = ['id', 'games', 'genres', 'platform']


class ReviewSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'rating', 'title', 'description', 'games']
