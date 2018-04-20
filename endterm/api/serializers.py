from rest_framework import serializers

from api.models import Todo


class TodoSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField(required=True)
    priority = serializers.IntegerField(required=True)

def create(self, validated_data):
  return Todo.objects.create(**validated_data)
  
def update(self, instance, validated_data ):
  instance.text = validated_data.get('title', instance.text)
  instance.priority = validated_data.get('priority', instance.priority)
  instance.save()
  return instance

class TodoSerializer2(serializers.ModelSerializer):
  
  class Meta:
    model = Todo
    fields = "__all__"
   