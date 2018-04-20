from django.db import models

# Create your models here.
class Blog(models.Model):
  title = models.CharField(max_length=200, blank=True)
  updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

  def __str__(self):
    return self.title