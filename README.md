# README


## create app
```yarn create redwood-app <app-name>```

## dev
- **server**
```yarn redwood (rw) dev```
- **storybook**
```yarn rw storybook```
- **prisma studio**
```yarn rw prisma studio```
- **jest**
```yarn rw test```
```p > <comp-name> > [down arrow] > [enter]```
- ***graphQL***
```http://localhost:8911/graphql```

## node modules
- ```yarn workspace web add <module-name>```
- ```yarn workspace api add <module-name>```
- ```yarn -W add <module-name> (adds to outer package.json)```


## generators
- **page**
```yarn rw generate (g) page <page-name>```
- **layout**
```yarn rw g layout <layout-name>```
- **component**
```yarn rw g component <comp-name>```
- **scaffold**
```yarn rw g scaffold <scaffold-name>```
- **cell**
```yarn g cell <cell-name>```

## tailwind
- ```yarn rw setup ui tailwindcss```

## deploy:
- ```yarn rw setup deploy vercel```
- ```yarn rw prisma migrate dev```
- ```commit / push```

## DB:
- **migrate**
```yarn rw prisma migrate dev```
- **seed**
```yarn rw prisma db seed```
- **reset**
```yarn rw prisma migrate reset```
- **supabase**
```supabase -> Settings -> Database -> Connection String -> URI -> DATABASE_URL in .env```

