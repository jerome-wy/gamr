from sysconfig import get_path_names
from rest_framework import serializers
from .models import User, Game, Review, Platform, Genre


class UserSerializer(serializers.HyperlinkedModelSerializer):
    games = serializers.HyperlinkedRelatedField(
        view_name='game_detail',
        many=True,
        read_only=True
    )

    games_url = serializers.ModelSerializer.serializer_url_field(
        view_name='user_detail'
    )

    class Meta:
        model = User
        fields = ('id', 'games', 'games_url', 'username',
                  'password', 'first_name', 'last_name')


class GameSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    game_url = serializers.ModelSerializer.serializer_url_field(
        view_name='game_detail'
    )

    class Meta:
        model = Game
        fields = ('id', 'user', 'user_id', 'game_url',
                  'title', 'description', 'platform_logo', 'rating', 'release_date', 'developer', 'storage_req', 'trailer', 'cover')


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    game = serializers.HyperlinkedRelatedField(
        view_name='game_detail',
        read_only=True
    )

    game_id = serializers.PrimaryKeyRelatedField(
        queryset=Game.objects.all(),
        source='game'
    )

    game_url = serializers.ModelSerializer.serializer_url_field(
        view_name='game_detail'
    )

    class Meta:
        model = Genre
        fields = ('id', 'game', 'game_id', 'game_url', 'genre')


class PlatformSerializer(serializers.HyperlinkedModelSerializer):
    genres = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        read_only=True
    )

    # game_id = serializers.PrimaryKeyRelatedField(
    #     queryset=Game.objects.all(),
    #     source='game'
    # )

    genre_url = serializers.ModelSerializer.serializer_url_field(
        view_name='genre_detail'
    )

    class Meta:
        model = Platform
        fields = ('id', 'genres', 'genre_url', 'platform')


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    game = serializers.HyperlinkedRelatedField(
        view_name='game_detail',
        read_only=True
    )

    game_id = serializers.PrimaryKeyRelatedField(
        queryset=Game.objects.all(),
        source='game'
    )

    class Meta:
        model = Review
        fields = ('id', 'game', 'game_id', 'title', 'description')
