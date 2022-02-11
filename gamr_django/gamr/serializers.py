from sysconfig import get_path_names
from rest_framework import serializers
from .models import User, Game, Review, Platform, Genre


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'description', 'release_date',
                  'developer', 'storage_req', 'trailer', 'cover']


class GenreSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = ['id', 'genre', 'games']


class PlatformSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    games = GameSerializer(many=True, read_only=True)

    # game_id = serializers.PrimaryKeyRelatedField(
    #     queryset=Game.objects.all()
    #     name='game'
    # )

    class Meta:
        model = Platform
        fields = ['id', 'platform', 'genres', 'games']


class UserSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password',
                  'email', 'first_name', 'last_name', 'games']


class ReviewSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)

    game_id = serializers.PrimaryKeyRelatedField(
        queryset=Game.objects.all(),
        source='game'
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = Review
        fields = ['id', 'game_id', 'user_id',
                  'rating', 'title', 'description', 'games']
