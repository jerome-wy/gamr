from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    email = models.EmailField()
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username


class Genre(models.Model):
    GENRE_CHOICES = (
        ('Action', 'Action'),
        ('Action-Adventure', 'Action-Adventure'),
        ('Adventure', 'Adventure'),
        ('Role-Playing', 'Role-Playing'),
        ('Simulation', 'Simulation'),
        ('Strategy', 'Strategy'),
        ('Sports', 'Sports'),
        ('Puzzle', 'Puzzle'),
        ('Indie', 'Indie'),
        ('MMORPG', 'MMORPG - Massive Multiplayer Online RPG'),
        ('MOBA', 'MOBA - Multiplayer Online Battle Arena'),
        ('Shooter', 'Shooter'),
        ('Stealth', 'Stealth'),
        ('Survival', 'Survival'),
    )
    genre = models.CharField(max_length=100, choices=GENRE_CHOICES)

    def __str__(self):
        return self.genre


class Platform(models.Model):
    PLATFORM_CHOICES = (
        ('PS', 'PlayStation'),
        ('PS2', 'PlayStation 2'),
        ('PS3', 'PlayStation 3'),
        ('PS4', 'PlayStation 4'),
        ('PS5', 'PlayStation 5'),
        ('Xbox', 'Xbox'),
        ('X360', 'Xbox 360'),
        ('XB1', 'Xbox One'),
        ('XS S/X', 'Xbox Series S/X'),
        ('GB', 'Nintendo Gameboy'),
        ('DS', 'Nintendo DS'),
        ('3DS', 'Nintendo 3DS'),
        ('N64', 'Nintedo 64'),
        ('GC', 'Nintendo GameCube'),
        ('WII', 'Nintendo Wii'),
        ('WIIU', 'Nintendo Wii U'),
        ('SWITCH', 'Nintendo Switch'),
        ('PC', 'PC'),
        ('OCULUS', 'Oculus VR'),
        ('GENESIS', 'Sega Genesis'),
        ('DREAMCAST', 'Sega Dreamcast')
    )
    platform = models.CharField(max_length=40, choices=PLATFORM_CHOICES)

    def __str__(self):
        return self.platform


class Game(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='games', null=True)
    genres = models.ManyToManyField(Genre)
    platforms = models.ManyToManyField(Platform)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)
    release_date = models.DateField()
    developer = models.CharField(max_length=50)
    storage_req = models.CharField(max_length=20)
    trailer = models.CharField(max_length=150)
    cover = models.CharField(max_length=150)

    def __str__(self):
        return self.title


class Review(models.Model):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, related_name='reviews', null=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='reviews', null=True)
    rating = models.IntegerField()
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=300)

    def __str__(self):
        return self.title
