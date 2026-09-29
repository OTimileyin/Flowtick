# Flowtick — Deployment Checklist

Before going live, complete every applicable item.

## API protection
- [ ] Add rate limiting
- [ ] Set API limits
- [ ] Set spending caps
- [ ] Handle failed requests
- [ ] Handle API timeouts
- [ ] Cache repeated requests

## UX and reliability
- [ ] Add error handling
- [ ] Add loading states where real async work exists
- [ ] Add empty states
- [ ] Prevent duplicate submissions

## Payments
- [ ] Prevent duplicate payments

## Database
- [ ] Optimize database queries
- [ ] Add database indexes
- [ ] Paginate large results

## File uploads
- [ ] Compress uploaded files
- [ ] Limit upload sizes

## Monitoring
- [ ] Add uptime monitoring
- [ ] Add error logging

## Testing and recovery
- [ ] Test simultaneous users where relevant
- [ ] Test backup restoration where a backend/database exists

## Flowtick V1 applicability
The current V1 uses React + Vite + localStorage only.

Therefore the following are currently not applicable:
- API rate limiting
- API limits
- spending caps
- duplicate payment prevention
- database query optimization
- database indexes
- server-side pagination
- upload compression
- upload size limits
- API caching
- backup restoration

These become required if the architecture expands.
