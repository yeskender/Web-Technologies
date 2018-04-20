from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=20)
    priority = models.IntegerField(default=1)

    def to_json(self):
        return {
            'id': self.id,
            'text': self.text,
            'priority': self.priority
        }
    def _str_(self):
        return self.text



