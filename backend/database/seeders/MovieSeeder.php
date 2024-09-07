<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MovieSeeder extends Seeder
{
    public function run()
    {
        $movies = [
            [
                'name' => 'Inception',
                'year' => 2010,
                'genre' => 'Sci-Fi',
                'cover_photo' => 'inception.jpg',
                'resume' => 'A thief who enters the dreams of others to steal secrets from their subconscious.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'The Dark Knight',
                'year' => 2008,
                'genre' => 'Action',
                'cover_photo' => 'dark_knight.jpg',
                'resume' => 'Batman raises the stakes in his war on crime.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'Interstellar',
                'year' => 2014,
                'genre' => 'Sci-Fi',
                'cover_photo' => 'interstellar.jpg',
                'resume' => 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'Gladiator',
                'year' => 2000,
                'genre' => 'Action',
                'cover_photo' => 'gladiator.jpg',
                'resume' => 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'The Godfather',
                'year' => 1972,
                'genre' => 'Crime',
                'cover_photo' => 'godfather.jpg',
                'resume' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'Pulp Fiction',
                'year' => 1994,
                'genre' => 'Crime',
                'cover_photo' => 'pulp_fiction.jpg',
                'resume' => 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'The Matrix',
                'year' => 1999,
                'genre' => 'Sci-Fi',
                'cover_photo' => 'matrix.jpg',
                'resume' => 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'Fight Club',
                'year' => 1999,
                'genre' => 'Drama',
                'cover_photo' => 'fight_club.jpg',
                'resume' => 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'Forrest Gump',
                'year' => 1994,
                'genre' => 'Drama',
                'cover_photo' => 'forest_gump.jpg',
                'resume' => 'The presidencies of Kennedy and Johnson, the Vietnam War, the civil rights movement, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
                'added_on' => $this->generateRandomDate()
            ],
            [
                'name' => 'The Shawshank Redemption',
                'year' => 1994,
                'genre' => 'Drama',
                'cover_photo' => 'shawshank.jpg',
                'resume' => 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                'added_on' => $this->generateRandomDate()
            ],
        ];

        DB::table('movies')->insert($movies);
    }

    private function generateRandomDate()
    {
        $start = Carbon::now();
        $end = Carbon::now()->addDays(3);
        $randomDate = Carbon::createFromTimestamp(mt_rand($start->timestamp, $end->timestamp));

        return $randomDate->toDateTimeString();
    }
}
