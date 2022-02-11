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

    # def create(self, validated_data):
    #     games_data = validated_data.pop('games')
    #     user = User.objects.create(**validated_data)
    #     for game_data in games_data:
    #         Game.objects.create(user=user, **game_data)
    #     return user


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

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = Review
        fields = ('id', 'game', 'game_id', 'rating',
                  'user_id', 'title', 'description')
