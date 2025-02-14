\c practice;
-- Insert data into the 'team' table
INSERT INTO team (
        name,
        city,
        stadium,
        founded_year,
        championships,
        image
    )
VALUES (
        'Yankees',
        'New York City',
        'Yankee Stadium',
        1903,
        27,
        'https://www.mlbstatic.com/team-logos/147.svg'
    ),
    (
        'Red Sox',
        'Boston',
        'Fenway Park',
        1901,
        9,
        'https://www.mlbstatic.com/team-logos/111.svg'
    ),
    (
        'Dodgers',
        'Los Angeles',
        'Dodger Stadium',
        1884,
        7,
        'https://www.mlbstatic.com/team-logos/119.svg'
    ),
    (
        'Cubs',
        'Chicago',
        'Wrigley Field',
        1876,
        3,
        'https://www.mlbstatic.com/team-logos/112.svg'
    ),
    (
        'Cardinals',
        'St. Louis',
        'Busch Stadium',
        1882,
        11,
        'https://www.mlbstatic.com/team-logos/138.svg'
    ),
    (
        'Giants',
        'San Francisco',
        'Oracle Park',
        1883,
        8,
        'https://www.mlbstatic.com/team-logos/137.svg'
    ),
    (
        'Astros',
        'Houston',
        'Minute Maid Park',
        1962,
        2,
        'https://www.mlbstatic.com/team-logos/117.svg'
    ),
    (
        'Braves',
        'Atlanta',
        'Truist Park',
        1871,
        4,
        'https://www.mlbstatic.com/team-logos/144.svg'
    ),
    (
        'Athletics',
        'Oakland',
        'RingCentral Coliseum',
        1901,
        9,
        'https://www.mlbstatic.com/team-logos/133.svg'
    ),
    (
        'Phillies',
        'Philadelphia',
        'Citizens Bank Park',
        1883,
        2,
        'https://www.mlbstatic.com/team-logos/143.svg'
    ),
    (
        'Pirates',
        'Pittsburgh',
        'PNC Park',
        1882,
        5,
        'https://www.mlbstatic.com/team-logos/134.svg'
    ),
    (
        'Reds',
        'Cincinnati',
        'Great American Ball Park',
        1881,
        5,
        'https://www.mlbstatic.com/team-logos/113.svg'
    ),
    (
        'Guardians',
        'Cleveland',
        'Progressive Field',
        1901,
        2,
        'https://www.mlbstatic.com/team-logos/114.svg'
    ),
    (
        'White Sox',
        'Chicago',
        'Guaranteed Rate Field',
        1901,
        3,
        'https://www.mlbstatic.com/team-logos/145.svg'
    ),
    (
        'Nationals',
        'Washington, D.C.',
        'Nationals Park',
        1969,
        1,
        'https://www.mlbstatic.com/team-logos/120.svg'
    ),
    (
        'Mets',
        'New York City',
        'Citi Field',
        1962,
        2,
        'https://www.mlbstatic.com/team-logos/121.svg'
    ),
    (
        'Padres',
        'San Diego',
        'Petco Park',
        1969,
        0,
        'https://www.mlbstatic.com/team-logos/135.svg'
    ),
    (
        'Mariners',
        'Seattle',
        'T-Mobile Park',
        1977,
        0,
        'https://www.mlbstatic.com/team-logos/136.svg'
    ),
    (
        'Rockies',
        'Denver',
        'Coors Field',
        1993,
        0,
        'https://www.mlbstatic.com/team-logos/115.svg'
    ),
    (
        'Rays',
        'Tampa Bay',
        'Tropicana Field',
        1998,
        0,
        'https://www.mlbstatic.com/team-logos/139.svg'
    ),
    (
        'Blue Jays',
        'Toronto',
        'Rogers Centre',
        1977,
        2,
        'https://www.mlbstatic.com/team-logos/141.svg'
    ),
    (
        'Twins',
        'Minneapolis',
        'Target Field',
        1901,
        3,
        'https://www.mlbstatic.com/team-logos/142.svg'
    ),
    (
        'Brewers',
        'Milwaukee',
        'American Family Field',
        1969,
        0,
        'https://www.mlbstatic.com/team-logos/158.svg'
    ),
    (
        'Royals',
        'Kansas City',
        'Kauffman Stadium',
        1969,
        2,
        'https://www.mlbstatic.com/team-logos/118.svg'
    ),
    (
        'Angels',
        'Los Angeles',
        'Angel Stadium',
        1961,
        1,
        'https://www.mlbstatic.com/team-logos/108.svg'
    ),
    (
        'Diamondbacks',
        'Phoenix',
        'Chase Field',
        1998,
        1,
        'https://www.mlbstatic.com/team-logos/109.svg'
    ),
    (
        'Marlins',
        'Miami',
        'loanDepot Park',
        1993,
        2,
        'https://www.mlbstatic.com/team-logos/146.svg'
    ),
    (
        'Rangers',
        'Arlington',
        'Globe Life Field',
        1961,
        0,
        'https://www.mlbstatic.com/team-logos/140.svg'
    ),
    (
        'Orioles',
        'Baltimore',
        'Oriole Park at Camden Yards',
        1901,
        3,
        'https://www.mlbstatic.com/team-logos/110.svg'
    ),
    (
        'Tigers',
        'Detroit',
        'Comerica Park',
        1901,
        4,
        'https://www.mlbstatic.com/team-logos/116.svg'
    );
INSERT INTO books (title, author, genre, available_date, image)
VALUES (
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        'Fiction',
        '2025-03-01',
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    ),
    (
        'Clean Code',
        'Robert C. Martin',
        'Programming',
        '2025-02-20',
        'https://m.media-amazon.com/images/I/51MT0MbpD7L._SX376_BO1,204,203,200_.jpg'
    ),
    (
        'The Pragmatic Programmer',
        'Andrew Hunt',
        'Programming',
        '2025-02-25',
        'https://m.media-amazon.com/images/I/518FqJvR9aL._SX415_BO1,204,203,200_.jpg'
    ),
    (
        'Atomic Habits',
        'James Clear',
        'Self-help',
        '2025-03-10',
        'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg'
    );