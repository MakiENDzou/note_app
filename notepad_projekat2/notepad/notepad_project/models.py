from django.db import models
from django.utils import timezone

# Create your models here.


class Note(models.Model):
    field = models.TextField(blank=True, max_length=1000)
    timestamp = models.DateTimeField(default=timezone.now)
    timestamp_updated = models.DateTimeField(default=timezone.now)

    class Meta: 
        ordering = ['-timestamp_updated']

    def __str__(self):
        return str(self.timestamp_updated)