from rest_framework import serializers
from .models import UserProfile, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "email", "password", "role"]

    def validate(self, data):
        required_fields = ["email", "first_name", "last_name", "role"]
        for field in required_fields:
            if not data.get(field):
                raise serializers.ValidationError({field: f"{field.title().replace('_', ' ')} is required"})
        return data

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"
