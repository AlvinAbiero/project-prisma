import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional - use with caution in production)
  await prisma.player.deleteMany({});
  await prisma.team.deleteMany({});

  console.log("Seeding database...");

  // Create teams
  const alAhly = await prisma.team.create({
    data: {
      name: "Al Ahly",
      logo: "https://example.com/alahly.png",
      shirtColor: "Red",
      foundedYear: 1907,
    },
  });

  const zamalek = await prisma.team.create({
    data: {
      name: "Zamalek SC",
      logo: "https://example.com/zamalek.png",
      shirtColor: "White",
      foundedYear: 1911,
    },
  });

  const pyramids = await prisma.team.create({
    data: {
      name: "Pyramids FC",
      logo: "https://example.com/pyramids.png",
      shirtColor: "Blue",
      foundedYear: 2008,
    },
  });

  const ismaily = await prisma.team.create({
    data: {
      name: "Ismaily SC",
      logo: "https://example.com/ismaily.png",
      shirtColor: "Yellow",
      foundedYear: 1924,
    },
  });

  const elGouna = await prisma.team.create({
    data: {
      name: "El Gouna FC",
      logo: "https://example.com/elgouna.png",
      shirtColor: "Red",
      foundedYear: 2003,
    },
  });

  // Create players for Al Ahly
  await prisma.player.createMany({
    data: [
      {
        firstName: "Mohamed",
        lastName: "El-Shenawy",
        jerseyNumber: 1,
        position: "Goalkeeper",
        dateOfBirth: new Date("1988-12-18"),
        nationality: "Egyptian",
        salary: 120000,
        teamId: alAhly.id,
      },
      {
        firstName: "Ali",
        lastName: "Maaloul",
        jerseyNumber: 21,
        position: "Left Back",
        dateOfBirth: new Date("1990-01-01"),
        nationality: "Tunisian",
        salary: 100000,
        teamId: alAhly.id,
      },
      {
        firstName: "Hussein",
        lastName: "El-Shahat",
        jerseyNumber: 14,
        position: "Winger",
        dateOfBirth: new Date("1991-09-21"),
        nationality: "Egyptian",
        salary: 95000,
        teamId: alAhly.id,
      },
      {
        firstName: "Mahmoud",
        lastName: "Kahraba",
        jerseyNumber: 7,
        position: "Forward",
        dateOfBirth: new Date("1994-04-13"),
        nationality: "Egyptian",
        salary: 85000,
        teamId: alAhly.id,
      },
      {
        firstName: "Percy",
        lastName: "Tau",
        jerseyNumber: 10,
        position: "Forward",
        dateOfBirth: new Date("1994-05-13"),
        nationality: "South African",
        salary: 110000,
        teamId: alAhly.id,
      },
    ],
  });

  // Create players for Zamalek
  await prisma.player.createMany({
    data: [
      {
        firstName: "Mohamed",
        lastName: "Awad",
        jerseyNumber: 1,
        position: "Goalkeeper",
        dateOfBirth: new Date("1992-07-06"),
        nationality: "Egyptian",
        salary: 90000,
        teamId: zamalek.id,
      },
      {
        firstName: "Ahmed",
        lastName: 'Sayed "Zizo"',
        jerseyNumber: 14,
        position: "Winger",
        dateOfBirth: new Date("1996-01-10"),
        nationality: "Egyptian",
        salary: 105000,
        teamId: zamalek.id,
      },
      {
        firstName: "Mahmoud",
        lastName: "Alaa",
        jerseyNumber: 3,
        position: "Center Back",
        dateOfBirth: new Date("1991-01-28"),
        nationality: "Egyptian",
        salary: 80000,
        teamId: zamalek.id,
      },
      {
        firstName: "Achraf",
        lastName: "Bencharki",
        jerseyNumber: 10,
        position: "Forward",
        dateOfBirth: new Date("1994-09-24"),
        nationality: "Moroccan",
        salary: 115000,
        teamId: zamalek.id,
      },
      {
        firstName: "Tarek",
        lastName: "Hamed",
        jerseyNumber: 8,
        position: "Midfielder",
        dateOfBirth: new Date("1988-10-24"),
        nationality: "Egyptian",
        salary: 95000,
        teamId: zamalek.id,
      },
    ],
  });

  // Create players for Pyramids FC
  await prisma.player.createMany({
    data: [
      {
        firstName: "Sherif",
        lastName: "Ekramy",
        jerseyNumber: 1,
        position: "Goalkeeper",
        dateOfBirth: new Date("1983-07-10"),
        nationality: "Egyptian",
        salary: 85000,
        teamId: pyramids.id,
      },
      {
        firstName: "Ahmed",
        lastName: "Fathy",
        jerseyNumber: 21,
        position: "Right Back",
        dateOfBirth: new Date("1984-11-10"),
        nationality: "Egyptian",
        salary: 90000,
        teamId: pyramids.id,
      },
      {
        firstName: "Abdullah",
        lastName: "El-Said",
        jerseyNumber: 10,
        position: "Attacking Midfielder",
        dateOfBirth: new Date("1985-07-13"),
        nationality: "Egyptian",
        salary: 125000,
        teamId: pyramids.id,
      },
      {
        firstName: "Ramadan",
        lastName: "Sobhi",
        jerseyNumber: 7,
        position: "Winger",
        dateOfBirth: new Date("1997-01-23"),
        nationality: "Egyptian",
        salary: 130000,
        teamId: pyramids.id,
      },
      {
        firstName: "Eric",
        lastName: "Traore",
        jerseyNumber: 19,
        position: "Forward",
        dateOfBirth: new Date("1996-05-01"),
        nationality: "Burkinabe",
        salary: 95000,
        teamId: pyramids.id,
      },
    ],
  });

  // Create players for Ismaily
  await prisma.player.createMany({
    data: [
      {
        firstName: "Mohamed",
        lastName: "Fawzi",
        jerseyNumber: 2,
        position: "Right Back",
        dateOfBirth: new Date("1989-03-15"),
        nationality: "Egyptian",
        salary: 60000,
        teamId: ismaily.id,
      },
      {
        firstName: "Baher",
        lastName: "El-Mohammadi",
        jerseyNumber: 5,
        position: "Center Back",
        dateOfBirth: new Date("1996-11-01"),
        nationality: "Egyptian",
        salary: 65000,
        teamId: ismaily.id,
      },
      {
        firstName: "Hamdi",
        lastName: "Soliman",
        jerseyNumber: 10,
        position: "Midfielder",
        dateOfBirth: new Date("1993-08-25"),
        nationality: "Egyptian",
        salary: 70000,
        teamId: ismaily.id,
      },
      {
        firstName: "Ibrahim",
        lastName: "Hassan",
        jerseyNumber: 18,
        position: "Midfielder",
        dateOfBirth: new Date("1996-03-11"),
        nationality: "Egyptian",
        salary: 55000,
        teamId: ismaily.id,
      },
      {
        firstName: "Fakhreddine",
        lastName: "Ben Youssef",
        jerseyNumber: 9,
        position: "Forward",
        dateOfBirth: new Date("1991-06-23"),
        nationality: "Tunisian",
        salary: 75000,
        teamId: ismaily.id,
      },
    ],
  });

  // Create players for El Gouna
  await prisma.player.createMany({
    data: [
      {
        firstName: "Islam",
        lastName: "Tarek",
        jerseyNumber: 1,
        position: "Goalkeeper",
        dateOfBirth: new Date("1992-05-15"),
        nationality: "Egyptian",
        salary: 45000,
        teamId: elGouna.id,
      },
      {
        firstName: "Amr",
        lastName: "El-Halwani",
        jerseyNumber: 4,
        position: "Center Back",
        dateOfBirth: new Date("1993-11-23"),
        nationality: "Egyptian",
        salary: 35000,
        teamId: elGouna.id,
      },
      {
        firstName: "Samuel",
        lastName: "Owusu",
        jerseyNumber: 10,
        position: "Winger",
        dateOfBirth: new Date("1996-03-28"),
        nationality: "Ghanaian",
        salary: 55000,
        teamId: elGouna.id,
      },
      {
        firstName: "Omar",
        lastName: "El-Said",
        jerseyNumber: 9,
        position: "Forward",
        dateOfBirth: new Date("1990-02-20"),
        nationality: "Egyptian",
        salary: 50000,
        teamId: elGouna.id,
      },
      {
        firstName: "Ahmed",
        lastName: "Yasser",
        jerseyNumber: 3,
        position: "Left Back",
        dateOfBirth: new Date("1994-05-12"),
        nationality: "Egyptian",
        salary: 40000,
        teamId: elGouna.id,
      },
    ],
  });

  console.log(`Created 5 teams with 25 players (5 players per team)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma client connection
    await prisma.$disconnect();
  });
