
from rest_framework.serializers import ModelSerializer
from notepad_project.models import Note
from django.utils import timezone



class NoteSerializer(ModelSerializer): 
    
    class Meta: 
        model = Note 
        # fields = ['field', 'timestamp_updated', 'timestamp']
        # fields = {'__all__' : { 'required' : False}}
        fields = '__all__'
        # kwargs = {'field': {'required': False}, 'timestamp_updated': {'required': False}, 'timestamp': {'required': False}}



    def create(self, validated_data):
        return Note.objects.create(**validated_data)

    def update(self,instance, validated_data):
        instance.field = validated_data.get('field', instance.field)
        instance.updated = timezone.now()
        instance.save()
        return instance

    def delete(self):
        self.delete()
