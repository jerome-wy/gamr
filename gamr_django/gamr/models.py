from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    email = models.EmailField()
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    def __str__(self):
        return self.username


class Game(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='games')
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)
    platform_logo = models.CharField(max_length=150)
    RATING_CHOICES = (
        (1, 1),
        (1.5, 1.5),
        (2, 2),
        (2.5, 2.5),
        (3, 3),
        (3.5, 3.5),
        (4, 4),
        (4.5, 4.5),
        (5, 5),
        (5.5, 5.5),
        (6, 6),
        (6.5, 6.5),
        (7, 7),
        (7.5, 7.5),
        (8, 8),
        (8.5, 8.5),
        (9, 9),
        (9.5, 9.5),
        (10, 10)
    )
    rating = models.IntegerField(choices=RATING_CHOICES)
    release_date = models.DateField()
    developer = models.CharField(max_length=50)
    storage_req = models.CharField(max_length=20)
    trailer = models.CharField(max_length=150)
    cover = models.CharField(max_length=150)

    def __str__(self):
        return self.title


class Genre(models.Model):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, related_name='genres', null=True)
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
    genre = models.ForeignKey(
        Genre, on_delete=models.CASCADE, related_name='platforms', null=True)
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


class Review(models.Model):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, related_name='reviews')
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=300)

    def __str__(self):
        return self.title
