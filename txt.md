# Since .env is gitignored, you can use .env.example to build a new `.env` file when you clone the repo.
# Keep this file up-to-date when you add new variables to `.env`.

# This file will be committed to version control, so make sure not to have any secrets in it.
# If you are cloning this repo, create a copy of this file named `.env` and populate it with your secrets.

# When adding additional env variables, the schema in /env/schema.mjs should be updated accordingly
# Prisma
DATABASE_URL=postgres://amandastern:GotMilk21@localhost/glaad

# Next Auth
# You can generate the secret via 'openssl rand -base64 32' on the command line
# More info: https://next-auth.js.org/configuration/options#secret

NEXTAUTH_SECRET=ypVkpkp+c5+9IPfXNgAFpdTTg6bIUAvq9KgbhHZMdG0=
NEXTAUTH_URL=http://localhost:3000