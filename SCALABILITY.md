


```md
# Scalability & Deployment Note

1. Modular Structure – Easy to split into microservices (auth-service, task-service)
2. Ready for Redis caching (task list & JWT blacklist)
3. Horizontal scaling with PM2 cluster mode
4. Docker-ready (just add Dockerfile)
5. Rate limiting & logging can be added in 10 lines
6. MongoDB indexing on owner + createdAt for fast queries
7. Environment variables used – production ready

Already deployed successfully on:
- Backend: Railway / Render
- Frontend: Vercel
