from django.shortcuts import render
from myapp.models import Blog


def index(request):
  return render(request, 'index.html')

def blogs_list(request):
  blogs = Blog.objects.all().order_by('-created_at')
  return render(request, 'blog/blog_list.html', {"blog_list": blogs, "active_menu": "blog"})

def blogs_details(request, blog_id):
  blog = Blog.objects.get(pk=blog_id)
  return render(request, 'blog/blog_details.html', {"blog": blog, "active_menu": "blog"})
