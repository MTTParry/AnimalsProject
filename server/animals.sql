--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6
-- Dumped by pg_dump version 13.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: animals; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE animals WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE animals OWNER TO postgres;

\connect animals

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.animals (
    id integer NOT NULL,
    commonname character varying(255),
    scientificname character varying(255),
    estimatedlivingwild integer,
    conservationstatus character varying(2),
    creationtimestamp timestamp without time zone
);


ALTER TABLE public.animals OWNER TO postgres;

--
-- Name: animals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.animals_id_seq OWNER TO postgres;

--
-- Name: animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.animals_id_seq OWNED BY public.animals.id;


--
-- Name: individuals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname character varying(255),
    species character varying(255),
    creationtimestamp timestamp without time zone
);


ALTER TABLE public.individuals OWNER TO postgres;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO postgres;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    datetime character varying(255),
    individualnickname character varying(255),
    location character varying(255),
    healthy boolean,
    emailsighter character varying(255),
    creationtimestamp timestamp without time zone
);


ALTER TABLE public.sightings OWNER TO postgres;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO postgres;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.species (
    id integer NOT NULL,
    commonname character varying(255),
    scientificname character varying(255),
    estimatedlivingwild integer,
    conservationstatus character varying(2),
    creationtimestamp timestamp without time zone
);


ALTER TABLE public.species OWNER TO postgres;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO postgres;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: animals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animals ALTER COLUMN id SET DEFAULT nextval('public.animals_id_seq'::regclass);


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.animals (id, commonname, scientificname, estimatedlivingwild, conservationstatus, creationtimestamp) FROM stdin;
1	African bush elephant	Loxodanta africana	415000	EN	\N
2	Unicorn	unicornus	0	EX	\N
3	Nuggets	unicornus	1000000000	LC	\N
4	Colonel	felis catus	1	LC	\N
5	face	ace fay	1	LC	\N
6	ent	en tay	500	EN	\N
7	weevil	bugus badus	1000000	LC	\N
\.


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.individuals (id, nickname, species, creationtimestamp) FROM stdin;
1	Lady	felis catus	2022-03-23 12:23:01.163878
2	Colonel	felis catus	2022-03-23 12:23:10.335671
3	Thisbe	felis catus	2022-03-23 12:23:16.63428
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sightings (id, datetime, individualnickname, location, healthy, emailsighter, creationtimestamp) FROM stdin;
1	2022-03-23 12:00:00	Colonel	My Office	t	test@test.com	2022-03-23 12:32:35.062844
2	2022-03-23 12:01:00	Lady	My Office	t	test@test.com	2022-03-23 12:33:27.745454
5	2022-03-19 18:00:00	Thisbe	Friend's bedroom	t	fake@fake.com	2022-03-23 15:50:45.830968
6	2022-03-23 15:57:00	Colonel	Outside the bathroom	t	no@no.com	2022-03-23 16:01:35.277953
7	2022-03-19 18:00:00	Spot	Street	t	no@test.com	2022-03-23 19:00:02.951561
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.species (id, commonname, scientificname, estimatedlivingwild, conservationstatus, creationtimestamp) FROM stdin;
1	Dragon	draconem	100	EN	2022-03-23 12:19:56.816674
2	Phoenix	phenix	10	EN	2022-03-23 12:20:26.260177
3	cat	felis catus	150000000	LC	2022-03-23 12:20:35.40025
13	Dog	Canis lupus familiaris	470000000	LC	2022-03-23 14:28:34.886143
14	Kappa	kappa kappa	0	EX	2022-03-23 14:40:05.667461
15	Chinchilla	chinchilla chinchilla	500000	EN	2022-03-23 18:57:47.177155
16	Unicorn	unicornus	0	EX	2022-03-23 19:15:41.056893
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.animals_id_seq', 7, true);


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.individuals_id_seq', 3, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sightings_id_seq', 7, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.species_id_seq', 16, true);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (id);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

