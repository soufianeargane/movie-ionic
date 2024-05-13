CREATE SEQUENCE IF NOT EXISTS fav_seq START WITH 1 INCREMENT BY 50;

CREATE SEQUENCE IF NOT EXISTS movie_seq START WITH 1 INCREMENT BY 50;

CREATE SEQUENCE IF NOT EXISTS user_seq START WITH 1 INCREMENT BY 50;

CREATE TABLE fav
(
    id       INTEGER NOT NULL,
    user_id  INTEGER,
    movie_id INTEGER,
    CONSTRAINT pk_fav PRIMARY KEY (id)
);

CREATE TABLE movie
(
    id         INTEGER NOT NULL,
    title      VARCHAR(255),
    season     VARCHAR(255),
    image_path VARCHAR(255),
    CONSTRAINT pk_movie PRIMARY KEY (id)
);

CREATE TABLE movie_tags
(
    movie_id INTEGER NOT NULL,
    tags     VARCHAR(255)
);

CREATE TABLE "user"
(
    id       INTEGER NOT NULL,
    email    VARCHAR(255),
    password VARCHAR(255),
    CONSTRAINT pk_user PRIMARY KEY (id)
);

ALTER TABLE fav
    ADD CONSTRAINT FK_FAV_ON_MOVIE FOREIGN KEY (movie_id) REFERENCES movie (id);

ALTER TABLE fav
    ADD CONSTRAINT FK_FAV_ON_USER FOREIGN KEY (user_id) REFERENCES "user" (id);

ALTER TABLE movie_tags
    ADD CONSTRAINT fk_movie_tags_on_movie FOREIGN KEY (movie_id) REFERENCES movie (id);