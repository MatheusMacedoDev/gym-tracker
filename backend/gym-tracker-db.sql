PGDMP  !        
            |            gym-tracker-db    16.3    16.3 C    K           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            L           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            M           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            N           1262    16720    gym-tracker-db    DATABASE     �   CREATE DATABASE "gym-tracker-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
     DROP DATABASE "gym-tracker-db";
                postgres    false            �            1259    16721    __EFMigrationsHistory    TABLE     �   CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);
 +   DROP TABLE public."__EFMigrationsHistory";
       public         heap    postgres    false            �            1259    16724    default_exercises    TABLE     �   CREATE TABLE public.default_exercises (
    default_exercise_id uuid NOT NULL,
    repetitions_range text NOT NULL,
    series_amount smallint NOT NULL,
    exercise_id uuid NOT NULL,
    default_workout_id uuid NOT NULL
);
 %   DROP TABLE public.default_exercises;
       public         heap    postgres    false            �            1259    16729    default_workouts    TABLE     �   CREATE TABLE public.default_workouts (
    default_workout_id uuid NOT NULL,
    workout_name text NOT NULL,
    user_id uuid NOT NULL
);
 $   DROP TABLE public.default_workouts;
       public         heap    postgres    false            �            1259    16734    diary_exercise_series    TABLE     �   CREATE TABLE public.diary_exercise_series (
    diary_exercise_serie_id uuid NOT NULL,
    serie_number smallint NOT NULL,
    repetitions smallint NOT NULL,
    overload smallint NOT NULL,
    diary_exercise_id uuid NOT NULL
);
 )   DROP TABLE public.diary_exercise_series;
       public         heap    postgres    false            �            1259    16737    diary_exercises    TABLE     �   CREATE TABLE public.diary_exercises (
    diary_exercise_id uuid NOT NULL,
    default_exercise_id uuid NOT NULL,
    diary_workout_id uuid NOT NULL
);
 #   DROP TABLE public.diary_exercises;
       public         heap    postgres    false            �            1259    16740    diary_workouts    TABLE     �   CREATE TABLE public.diary_workouts (
    diary_workout_id uuid NOT NULL,
    workout_date date NOT NULL,
    default_workout_id uuid NOT NULL
);
 "   DROP TABLE public.diary_workouts;
       public         heap    postgres    false            �            1259    16743    exercise_muscle_groups    TABLE     �   CREATE TABLE public.exercise_muscle_groups (
    exercise_muscle_group_id uuid NOT NULL,
    muscle_group_id uuid NOT NULL,
    exercise_id uuid NOT NULL
);
 *   DROP TABLE public.exercise_muscle_groups;
       public         heap    postgres    false            �            1259    16746 	   exercises    TABLE     y   CREATE TABLE public.exercises (
    exercise_id uuid NOT NULL,
    exercise_name text NOT NULL,
    exercise_gif text
);
    DROP TABLE public.exercises;
       public         heap    postgres    false            �            1259    16751    muscle_groups    TABLE     ~   CREATE TABLE public.muscle_groups (
    muscle_group_id uuid NOT NULL,
    group_name text NOT NULL,
    muscle_image text
);
 !   DROP TABLE public.muscle_groups;
       public         heap    postgres    false            �            1259    16756    profile_histories    TABLE     �  CREATE TABLE public.profile_histories (
    profile_history_id uuid NOT NULL,
    date timestamp with time zone NOT NULL,
    weight numeric(5,2) NOT NULL,
    height smallint NOT NULL,
    abdominal_girth numeric(4,1),
    scapular_girth numeric(4,1),
    hip_girth numeric(4,1),
    arm_girth numeric(4,1),
    leg_girth numeric(4,1),
    body_fat numeric(4,3),
    evolution_photo text,
    user_id uuid NOT NULL
);
 %   DROP TABLE public.profile_histories;
       public         heap    postgres    false            �            1259    16761 
   user_likes    TABLE     �   CREATE TABLE public.user_likes (
    user_like_id uuid NOT NULL,
    sender_user_id uuid NOT NULL,
    receiver_user_id uuid NOT NULL
);
    DROP TABLE public.user_likes;
       public         heap    postgres    false            �            1259    16764    users    TABLE     c  CREATE TABLE public.users (
    user_id uuid NOT NULL,
    email text NOT NULL,
    password_hash bytea NOT NULL,
    password_salt bytea NOT NULL,
    name text NOT NULL,
    birth_year smallint NOT NULL,
    gender character(1) NOT NULL,
    password_recover_code character(5),
    profile_photo text,
    profile_updated_on timestamp with time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false            =          0    16721    __EFMigrationsHistory 
   TABLE DATA           R   COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
    public          postgres    false    215   4]       >          0    16724    default_exercises 
   TABLE DATA           �   COPY public.default_exercises (default_exercise_id, repetitions_range, series_amount, exercise_id, default_workout_id) FROM stdin;
    public          postgres    false    216   q^       ?          0    16729    default_workouts 
   TABLE DATA           U   COPY public.default_workouts (default_workout_id, workout_name, user_id) FROM stdin;
    public          postgres    false    217   �c       @          0    16734    diary_exercise_series 
   TABLE DATA           �   COPY public.diary_exercise_series (diary_exercise_serie_id, serie_number, repetitions, overload, diary_exercise_id) FROM stdin;
    public          postgres    false    218   �f       A          0    16737    diary_exercises 
   TABLE DATA           c   COPY public.diary_exercises (diary_exercise_id, default_exercise_id, diary_workout_id) FROM stdin;
    public          postgres    false    219   Ni       B          0    16740    diary_workouts 
   TABLE DATA           \   COPY public.diary_workouts (diary_workout_id, workout_date, default_workout_id) FROM stdin;
    public          postgres    false    220   `k       C          0    16743    exercise_muscle_groups 
   TABLE DATA           h   COPY public.exercise_muscle_groups (exercise_muscle_group_id, muscle_group_id, exercise_id) FROM stdin;
    public          postgres    false    221   il       D          0    16746 	   exercises 
   TABLE DATA           M   COPY public.exercises (exercise_id, exercise_name, exercise_gif) FROM stdin;
    public          postgres    false    222   \s       E          0    16751    muscle_groups 
   TABLE DATA           R   COPY public.muscle_groups (muscle_group_id, group_name, muscle_image) FROM stdin;
    public          postgres    false    223   By       F          0    16756    profile_histories 
   TABLE DATA           �   COPY public.profile_histories (profile_history_id, date, weight, height, abdominal_girth, scapular_girth, hip_girth, arm_girth, leg_girth, body_fat, evolution_photo, user_id) FROM stdin;
    public          postgres    false    224   �{       G          0    16761 
   user_likes 
   TABLE DATA           T   COPY public.user_likes (user_like_id, sender_user_id, receiver_user_id) FROM stdin;
    public          postgres    false    225   ��       H          0    16764    users 
   TABLE DATA           �   COPY public.users (user_id, email, password_hash, password_salt, name, birth_year, gender, password_recover_code, profile_photo, profile_updated_on) FROM stdin;
    public          postgres    false    226   {�       |           2606    16770 .   __EFMigrationsHistory PK___EFMigrationsHistory 
   CONSTRAINT     {   ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");
 \   ALTER TABLE ONLY public."__EFMigrationsHistory" DROP CONSTRAINT "PK___EFMigrationsHistory";
       public            postgres    false    215            �           2606    16772 &   default_exercises PK_default_exercises 
   CONSTRAINT     w   ALTER TABLE ONLY public.default_exercises
    ADD CONSTRAINT "PK_default_exercises" PRIMARY KEY (default_exercise_id);
 R   ALTER TABLE ONLY public.default_exercises DROP CONSTRAINT "PK_default_exercises";
       public            postgres    false    216            �           2606    16774 $   default_workouts PK_default_workouts 
   CONSTRAINT     t   ALTER TABLE ONLY public.default_workouts
    ADD CONSTRAINT "PK_default_workouts" PRIMARY KEY (default_workout_id);
 P   ALTER TABLE ONLY public.default_workouts DROP CONSTRAINT "PK_default_workouts";
       public            postgres    false    217            �           2606    16776 .   diary_exercise_series PK_diary_exercise_series 
   CONSTRAINT     �   ALTER TABLE ONLY public.diary_exercise_series
    ADD CONSTRAINT "PK_diary_exercise_series" PRIMARY KEY (diary_exercise_serie_id);
 Z   ALTER TABLE ONLY public.diary_exercise_series DROP CONSTRAINT "PK_diary_exercise_series";
       public            postgres    false    218            �           2606    16778 "   diary_exercises PK_diary_exercises 
   CONSTRAINT     q   ALTER TABLE ONLY public.diary_exercises
    ADD CONSTRAINT "PK_diary_exercises" PRIMARY KEY (diary_exercise_id);
 N   ALTER TABLE ONLY public.diary_exercises DROP CONSTRAINT "PK_diary_exercises";
       public            postgres    false    219            �           2606    16780     diary_workouts PK_diary_workouts 
   CONSTRAINT     n   ALTER TABLE ONLY public.diary_workouts
    ADD CONSTRAINT "PK_diary_workouts" PRIMARY KEY (diary_workout_id);
 L   ALTER TABLE ONLY public.diary_workouts DROP CONSTRAINT "PK_diary_workouts";
       public            postgres    false    220            �           2606    16782 0   exercise_muscle_groups PK_exercise_muscle_groups 
   CONSTRAINT     �   ALTER TABLE ONLY public.exercise_muscle_groups
    ADD CONSTRAINT "PK_exercise_muscle_groups" PRIMARY KEY (exercise_muscle_group_id);
 \   ALTER TABLE ONLY public.exercise_muscle_groups DROP CONSTRAINT "PK_exercise_muscle_groups";
       public            postgres    false    221            �           2606    16784    exercises PK_exercises 
   CONSTRAINT     _   ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT "PK_exercises" PRIMARY KEY (exercise_id);
 B   ALTER TABLE ONLY public.exercises DROP CONSTRAINT "PK_exercises";
       public            postgres    false    222            �           2606    16786    muscle_groups PK_muscle_groups 
   CONSTRAINT     k   ALTER TABLE ONLY public.muscle_groups
    ADD CONSTRAINT "PK_muscle_groups" PRIMARY KEY (muscle_group_id);
 J   ALTER TABLE ONLY public.muscle_groups DROP CONSTRAINT "PK_muscle_groups";
       public            postgres    false    223            �           2606    16788 &   profile_histories PK_profile_histories 
   CONSTRAINT     v   ALTER TABLE ONLY public.profile_histories
    ADD CONSTRAINT "PK_profile_histories" PRIMARY KEY (profile_history_id);
 R   ALTER TABLE ONLY public.profile_histories DROP CONSTRAINT "PK_profile_histories";
       public            postgres    false    224            �           2606    16790    user_likes PK_user_likes 
   CONSTRAINT     b   ALTER TABLE ONLY public.user_likes
    ADD CONSTRAINT "PK_user_likes" PRIMARY KEY (user_like_id);
 D   ALTER TABLE ONLY public.user_likes DROP CONSTRAINT "PK_user_likes";
       public            postgres    false    225            �           2606    16792    users PK_users 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_users" PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_users";
       public            postgres    false    226            }           1259    16793 '   IX_default_exercises_default_workout_id    INDEX     u   CREATE INDEX "IX_default_exercises_default_workout_id" ON public.default_exercises USING btree (default_workout_id);
 =   DROP INDEX public."IX_default_exercises_default_workout_id";
       public            postgres    false    216            ~           1259    16794     IX_default_exercises_exercise_id    INDEX     g   CREATE INDEX "IX_default_exercises_exercise_id" ON public.default_exercises USING btree (exercise_id);
 6   DROP INDEX public."IX_default_exercises_exercise_id";
       public            postgres    false    216            �           1259    16795    IX_default_workouts_user_id    INDEX     ]   CREATE INDEX "IX_default_workouts_user_id" ON public.default_workouts USING btree (user_id);
 1   DROP INDEX public."IX_default_workouts_user_id";
       public            postgres    false    217            �           1259    16796 *   IX_diary_exercise_series_diary_exercise_id    INDEX     {   CREATE INDEX "IX_diary_exercise_series_diary_exercise_id" ON public.diary_exercise_series USING btree (diary_exercise_id);
 @   DROP INDEX public."IX_diary_exercise_series_diary_exercise_id";
       public            postgres    false    218            �           1259    16797 &   IX_diary_exercises_default_exercise_id    INDEX     s   CREATE INDEX "IX_diary_exercises_default_exercise_id" ON public.diary_exercises USING btree (default_exercise_id);
 <   DROP INDEX public."IX_diary_exercises_default_exercise_id";
       public            postgres    false    219            �           1259    16798 #   IX_diary_exercises_diary_workout_id    INDEX     m   CREATE INDEX "IX_diary_exercises_diary_workout_id" ON public.diary_exercises USING btree (diary_workout_id);
 9   DROP INDEX public."IX_diary_exercises_diary_workout_id";
       public            postgres    false    219            �           1259    16799 $   IX_diary_workouts_default_workout_id    INDEX     o   CREATE INDEX "IX_diary_workouts_default_workout_id" ON public.diary_workouts USING btree (default_workout_id);
 :   DROP INDEX public."IX_diary_workouts_default_workout_id";
       public            postgres    false    220            �           1259    16800 %   IX_exercise_muscle_groups_exercise_id    INDEX     q   CREATE INDEX "IX_exercise_muscle_groups_exercise_id" ON public.exercise_muscle_groups USING btree (exercise_id);
 ;   DROP INDEX public."IX_exercise_muscle_groups_exercise_id";
       public            postgres    false    221            �           1259    16801 )   IX_exercise_muscle_groups_muscle_group_id    INDEX     y   CREATE INDEX "IX_exercise_muscle_groups_muscle_group_id" ON public.exercise_muscle_groups USING btree (muscle_group_id);
 ?   DROP INDEX public."IX_exercise_muscle_groups_muscle_group_id";
       public            postgres    false    221            �           1259    16802    IX_exercises_exercise_name    INDEX     b   CREATE UNIQUE INDEX "IX_exercises_exercise_name" ON public.exercises USING btree (exercise_name);
 0   DROP INDEX public."IX_exercises_exercise_name";
       public            postgres    false    222            �           1259    16803    IX_muscle_groups_group_name    INDEX     d   CREATE UNIQUE INDEX "IX_muscle_groups_group_name" ON public.muscle_groups USING btree (group_name);
 1   DROP INDEX public."IX_muscle_groups_group_name";
       public            postgres    false    223            �           1259    16804    IX_profile_histories_user_id    INDEX     _   CREATE INDEX "IX_profile_histories_user_id" ON public.profile_histories USING btree (user_id);
 2   DROP INDEX public."IX_profile_histories_user_id";
       public            postgres    false    224            �           1259    16805    IX_user_likes_receiver_user_id    INDEX     c   CREATE INDEX "IX_user_likes_receiver_user_id" ON public.user_likes USING btree (receiver_user_id);
 4   DROP INDEX public."IX_user_likes_receiver_user_id";
       public            postgres    false    225            �           1259    16806    IX_user_likes_sender_user_id    INDEX     _   CREATE INDEX "IX_user_likes_sender_user_id" ON public.user_likes USING btree (sender_user_id);
 2   DROP INDEX public."IX_user_likes_sender_user_id";
       public            postgres    false    225            �           1259    16807    IX_users_email    INDEX     J   CREATE UNIQUE INDEX "IX_users_email" ON public.users USING btree (email);
 $   DROP INDEX public."IX_users_email";
       public            postgres    false    226            �           2606    16808 J   default_exercises FK_default_exercises_default_workouts_default_workout_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.default_exercises
    ADD CONSTRAINT "FK_default_exercises_default_workouts_default_workout_id" FOREIGN KEY (default_workout_id) REFERENCES public.default_workouts(default_workout_id) ON DELETE CASCADE;
 v   ALTER TABLE ONLY public.default_exercises DROP CONSTRAINT "FK_default_exercises_default_workouts_default_workout_id";
       public          postgres    false    217    4739    216            �           2606    16813 <   default_exercises FK_default_exercises_exercises_exercise_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.default_exercises
    ADD CONSTRAINT "FK_default_exercises_exercises_exercise_id" FOREIGN KEY (exercise_id) REFERENCES public.exercises(exercise_id) ON DELETE CASCADE;
 h   ALTER TABLE ONLY public.default_exercises DROP CONSTRAINT "FK_default_exercises_exercises_exercise_id";
       public          postgres    false    216    4756    222            �           2606    16818 2   default_workouts FK_default_workouts_users_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.default_workouts
    ADD CONSTRAINT "FK_default_workouts_users_user_id" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.default_workouts DROP CONSTRAINT "FK_default_workouts_users_user_id";
       public          postgres    false    4769    217    226            �           2606    16823 P   diary_exercise_series FK_diary_exercise_series_diary_exercises_diary_exercise_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.diary_exercise_series
    ADD CONSTRAINT "FK_diary_exercise_series_diary_exercises_diary_exercise_id" FOREIGN KEY (diary_exercise_id) REFERENCES public.diary_exercises(diary_exercise_id) ON DELETE CASCADE;
 |   ALTER TABLE ONLY public.diary_exercise_series DROP CONSTRAINT "FK_diary_exercise_series_diary_exercises_diary_exercise_id";
       public          postgres    false    218    4746    219            �           2606    16828 H   diary_exercises FK_diary_exercises_default_exercises_default_exercise_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.diary_exercises
    ADD CONSTRAINT "FK_diary_exercises_default_exercises_default_exercise_id" FOREIGN KEY (default_exercise_id) REFERENCES public.default_exercises(default_exercise_id) ON DELETE CASCADE;
 t   ALTER TABLE ONLY public.diary_exercises DROP CONSTRAINT "FK_diary_exercises_default_exercises_default_exercise_id";
       public          postgres    false    216    219    4736            �           2606    16833 B   diary_exercises FK_diary_exercises_diary_workouts_diary_workout_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.diary_exercises
    ADD CONSTRAINT "FK_diary_exercises_diary_workouts_diary_workout_id" FOREIGN KEY (diary_workout_id) REFERENCES public.diary_workouts(diary_workout_id) ON DELETE CASCADE;
 n   ALTER TABLE ONLY public.diary_exercises DROP CONSTRAINT "FK_diary_exercises_diary_workouts_diary_workout_id";
       public          postgres    false    219    4749    220            �           2606    16838 D   diary_workouts FK_diary_workouts_default_workouts_default_workout_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.diary_workouts
    ADD CONSTRAINT "FK_diary_workouts_default_workouts_default_workout_id" FOREIGN KEY (default_workout_id) REFERENCES public.default_workouts(default_workout_id) ON DELETE CASCADE;
 p   ALTER TABLE ONLY public.diary_workouts DROP CONSTRAINT "FK_diary_workouts_default_workouts_default_workout_id";
       public          postgres    false    217    220    4739            �           2606    16843 F   exercise_muscle_groups FK_exercise_muscle_groups_exercises_exercise_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.exercise_muscle_groups
    ADD CONSTRAINT "FK_exercise_muscle_groups_exercises_exercise_id" FOREIGN KEY (exercise_id) REFERENCES public.exercises(exercise_id) ON DELETE CASCADE;
 r   ALTER TABLE ONLY public.exercise_muscle_groups DROP CONSTRAINT "FK_exercise_muscle_groups_exercises_exercise_id";
       public          postgres    false    4756    222    221            �           2606    16848 N   exercise_muscle_groups FK_exercise_muscle_groups_muscle_groups_muscle_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.exercise_muscle_groups
    ADD CONSTRAINT "FK_exercise_muscle_groups_muscle_groups_muscle_group_id" FOREIGN KEY (muscle_group_id) REFERENCES public.muscle_groups(muscle_group_id) ON DELETE CASCADE;
 z   ALTER TABLE ONLY public.exercise_muscle_groups DROP CONSTRAINT "FK_exercise_muscle_groups_muscle_groups_muscle_group_id";
       public          postgres    false    4759    223    221            �           2606    16853 4   profile_histories FK_profile_histories_users_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.profile_histories
    ADD CONSTRAINT "FK_profile_histories_users_user_id" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.profile_histories DROP CONSTRAINT "FK_profile_histories_users_user_id";
       public          postgres    false    226    224    4769            �           2606    16858 /   user_likes FK_user_likes_users_receiver_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_likes
    ADD CONSTRAINT "FK_user_likes_users_receiver_user_id" FOREIGN KEY (receiver_user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 [   ALTER TABLE ONLY public.user_likes DROP CONSTRAINT "FK_user_likes_users_receiver_user_id";
       public          postgres    false    4769    225    226            �           2606    16863 -   user_likes FK_user_likes_users_sender_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_likes
    ADD CONSTRAINT "FK_user_likes_users_sender_user_id" FOREIGN KEY (sender_user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.user_likes DROP CONSTRAINT "FK_user_likes_users_sender_user_id";
       public          postgres    false    226    4769    225            =   -  x�}�Ko�0��͏A�'�XA_R[Pĥ��,�ډ���U���=�7���@9����ťŇ�]����q@�b}S` zRS����<b�_F���n�ai"f��;����P�ް���κ�c)��%��Y�+c�������Z#RP6T��T�+����\�'F�����lp	s �S��Z�)�ͺ�T��S�N@�IJ5�h�N�ܙ��8]���� "�0픽^u�qf�����_�ORN���?�-���Ici�����wLke�ǼF��qso���'�m]c]�ߟ���AQ߿}�"      >   6  x��VA�,�
\W݅`l�����G��3�{�O�J�TY���D�l����M�nu�;g?�I��t�b�m��X�8"�Z3v[�z>��d�NRxX�Ӭa��tyf�>��u�=��lI��hM@�S����}���?vO��Em�%�4g�{]��$��Cu���Mr:P���2:��Q#u�G�d�X	g���d��хV�j\�V<��
b�}i��L;�q#g.os�Wl�����G�£��?����y�����\j��%J�,���mU��?���6��1C@L�C��.6ut�hޱ:8C�PHP�G���b���z�^��hu�.黇Z]����ǣ�{Ƶ�e>��I�C{Ϧ����Pq�!~�=��C ���t}睜W���F&����P�y����U��@�#F�����1#�θ_�şU�;��[��ܒ��i'�6���GX����ڴ 	��{d��ooVe9h݆R��$T�����^��U��B�8���ꆓ�)`P�yƣ���OH��qc��r�A�F��t����Ǒf����o5��@�E�t�~$��T7_�-�֘4�����z�S�?���k�F�е���ŤPt�q�e�P�T�:EM���	wvb�dĐyN��.�h��FQ��N*h�r����f��E,�8�$M�2,����-�_��� ��a�^�5�ϯ�n[�m8�ꅑ�����V�;�f��i�*�^�u*XA>4�2=��0\c ��ѝ����p�5٤@��O�r {#��1�G�ŷ�^p���に!9��M8����,�s�x�I�%�e�K����*�`4��Q�s�}�z�jh�M��Mz�1w>glL�>��Ïn��6tN^��Y�ۧdL���
c��M0��F���B&���g�wvz��du$ؓ��R�ߛ��چ�����tE�ad#�gX΋d�U�M+/�7v\�j�<lhRrN$^kdÿ��Y���tE}�$��I�4�HP��@+���١О�N�|���;j��;�_�z��:Y��&��h�Y뜔�n�`��<�`MB�o��7M��R��/���m���)b=:�u�X���[��ն6�<�b���Ղ��q☸ ��h�ƶV(��ф���"v��?���#Ҥ��@�ٱ�����u1�W1��⸃71��Q�x�����&F��v�����X �����9���]'P�nᤧ������w]�Zl?ᴑT1.�r�~V�G2(8��L��C���F��q�O����IÊ��W��Q
T,������"W���s�M��&�ӊv6���ɇ!��%���Z_y�����~��
�      ?   �  x��TK�E]W�b. B�T~�.��%)%&l7���A��0,�������7w��5f����0�ؘ�N����/������˧��'!�*�	�� 9�9��gC:(���M�F�d����#Gƒ��xк�BTߵh��8��,���Yx�?&�vM�?�������z�Q6���/L��	+M}�jyڽ'[=褣�%ܐY?×4�w�?|kA
Ȩ�<�������A��z�:�/�=�qqwo���MF�����NG�fʧ��.�r@*P�P�F����k���g׫���d@���	�:��j��!���N�K܅���H!�y�h<��������W����g��c�Cک��0�v�"{ �?՗R!�)����*\��s��O��G9��x�.2���Aަ��O
�ri ���eK�˾�_>^.L1�h�X� �h��W%ݺ�����ɥ����t0�D}�ݯ���g��v�r�j%Sk�Ku��cu;A��Q��3�V*���xK��-,���P�����*��(��lntX�\Q�/G�Z��T9*;���ӷ\?Ƌ=>�^e(�
q������P.2�j�ܛcU3��e�.'��@q�s�t����T

X��Pf���[����0O��:I@b(<������o+����]#{5ª�O+��X#�_ؿ�T�M��*�Qͬ����Еx߿|w���J(U      @   �  x��TK��8����a/=1�����k=��JQ!���`�|�q�� 7,.�Ì�ö=��3�I�^T	3O�Gp����xN*��)%��U �	�{����P���x�	�2����N�	��Bֶ��t]�+�/��.H�t4�Q���+q����(rCma�\	)����c�������2���+^�� �i6!Ɣcf�����bV�4���������^^|�w<�R&�Q��qDa8{�ܮ�h�9���D�:�3���0����\��:�D��P�Q��.���	]H�����������!�$i
��&rF�:z ���=�~�V|��ʻ4a�5`:����pه�gv��ڙ�zd�W��_��~��1g�][��U�&�T����.���y�.�	�y��8��κO�;�#��
i�	���v�t۞qԸ�[I��9#�s���ۢc{隧W(�Mg~�Yb�̸_�����<}�]���3_"v�:��]��M9�u<�p��:;6�z�=bT��&�EiXW�|���;x�������1�rQ'\[�~z�+m�+R�c�8�F�&x���>['��L�}S���8�=4m�w#���d�S�Wǯ�>y�mV^/�e�y�]������b{T��9:�I
K�x��7K]���w�%��V#v��fv�5�s;���?���_�z�      A     x�����0D�v/d@�z�꿄�T�g|��<v��j�n�F�mft`ܽ(-��=X�:�¼��c��Ac�3�@?Ol<��`�
��}��C�U�3�r����{�2N+���M(}��㞬I���i 8�܍\}���g4��bH��t慭���i[�ř�V�1���v���\�ts�x�c��p�|/k�j�2�*�U�۸r;!�@p/���/4h�c�墯'jP�Y0��V����2�Y�W�s�$�i�:����zylc��X<�v�tY���Yg��~���� FH	�@�����=�X~���Q���W'�!)����F��-�;)���<g�|�4���{,Wb}�'�+��y�*��]?`��DvQ#�lʎe�Y��Y��vߪ�O[b���#���w���D���
�-,Kf�ׂ�$�c�@�8B���f�FV�n�3e�g����e�ջ�֤,�Z��(��R�{\��ݢ�V���1��@ݹ�����67�蠤Iq�~������ ����      B   �   x�M���0C�s/܀z����	��6d$=@�X�y�e�:Az��MQ3��g�d@���W]������;vc��'h�1/�Ň�#���1!&�_�b�PѦŭ�F������)��)��
�`p�$�˗?��=p���W�H��r�� �s���W�˞�� �?cڵ��gC��N��Џ���C�R����d�趷�^G����.�þ�d��Vfk���zu�+�_h���z���1��ah}      C   �  x��Wɑ-�]��4��o !�M�C�7�MEū|Ig"���J鍭��V|�(䒶�%+���E�(��,ʻ���,3gh%q���rV�"C����q����k�ԯ����ڤ�IQ܄��y*j�Z�V�fm1�s�C��fT|����ɟ����VTRnR�l���6������=(fK)����v;��F}���6G͊Kl�G=[�k�b����P�j?4��Ʌr��Vh��u��r��֌Q$�,��*+��8�l[��ug5I�yٝ����DE���9�U�X��ާ(yŝp���b�����S���:𯶰;��壸�6�t���aVY�T������$3f�� ]ߠ�j�Z�5!ۭ�Uvo-��`���Eﾰuܢ�f���<��?�aZ��J�o����Mt��ᯏPq�Nw�T+�S��^m���o�Pl�΀�i��+Qآ
7���c�<ӣĨ��_Ὥ8-��M����(�s�\�V�$VTE���`u���>�]^$�'��f���66`���b�i���aF:��~�U����LEw�v�x`L���1%'��ȝ�|��\댟g�Xe4��v7Ȉ9�m}���^��d�#؀/�P��w�[S���*[:.����E�U�*�?���]��D�kb��K������;r��p���?i|yd�K5�Dx��G�&�r�rY��� �� Xߺc�:���k��S!�q[hI�	1��;��T�6�?n�.r
����6�1`擣�f^^q��H��X#���r�O=�k�vt;V�F�0k�U��܉�?���)�u��l�_k���4���s�y�7�RS*��!�؝Ǳ��r��̴��]��!(b5,�S� 1�я��_Y��hD������S.,��BR�B�C�X�$h��	��Y��x�KN>=�*"��|˞coHO4Spq(@�mju]0{+���v�:�Ol؝tKj�Wi|�o&k0��{R+�O����.�o�z��`PX�_�S�A0�z����ħP�Վ��k�74��f
�J,�M�Ѧ��NP�խ{f0/�L~q�Z�{'d  ��K�j��q��a>�c��J�N��CP`EΒ �1�j��q.9��v���(kk�y��Yp���W�ӆ�V��a�I$���/^w�
�8&H���C��r)���
Fp�:kj+f	�G��l���=	J6'9�G(HI?p� "��<.�a���6*,�#&%�N"@Av�^�K;#zv�ZB��@;8���h�aI�X`&]F�V� ���K��K�qF-=RƢc��|�:;z��I �$D�� ���7G�ST;�>��}�p=�!y�Bl��!��Ȍ��p�	Pٛn��<����#<��Ĵ*x�����c��'�Ѱ2���\�L�@�xv�u�Fl1�#P��W.q3xK�-��:�c�\r>8~B��4����w��솞G�AfO</�p��3nA&�f5z+�����7ЄO�a�}� ?����;����Hd~5��Z�ݲ?��Ȅ��$=�{\��>g�SsZ0����[�����=Q��0�{�X�~n��[9p"�֮�5�êpqn{E�����"�z5�Bx��g��Mo�|+�W@�d�����CaK��:��q�E<�n��ڸo����xau����a(yG`B��J���@��S������~\��v�F�.����#�H�odss�}s�}N&���ቱsa^�ݵ��xjI\j �+$���J�������|<)[      D   �  x���=o���կ�����gu��B:�'���ˁgg3�<��80l�2GN��\�KR�JwѮBɮg�����X�f_5�j+ JI��5����B3����y�pu�,��O�_o�l�	��iJ��������<Nt�K7���j���w�8,�4����P�`�s����MW_�Z4%AS�`@�
��I��T��z��v���GZƳb��oS��g�/���n� ����VTi�F�^F0�X�"%h���&&����~�G����h>+�|( �<n����KV*��r|�����#��%����1*���B�t���ǳ�s�9Ȃ�j�NeF�RvN8鑲�^�h#��[�����;�`A�Dӂ/i%
W��R�i�6��1�6(H���y}3����˙;�8����U�]�|�'�ʐ9�5{m�mw�	�+��"��r�&�q�د��gn*���i����/�8��	v���0ڐ���M�$���/�k��	��0Oġ��f>X�k�6�-��U���SJ����ʪjH��է����C�N<p�� �rYo��&�@�v�|�YA͕��k�D�7̷��K�o���op:��������} ����B�t
�!�&Q [ɦdsZ� ������b��~;B��M�����	Rkd��w�Sy�(_=���~����h�H��+�y�s�Pd��& =m`׊��բ*�r�maQe[J�#��ԮD4�zG3wc�[ۄ�"uR�0��SF��P
��P|3E����G����_G֒i��Ꭶ���{w8���'��X��
 H��jKDa�+�R`3X����������Ԏ�/�Vj�`�z,�;�_����Jò`Y�lM��p��CL�9��ȇ�?�{Zpz�>q�A�X�@dba����q�RuH���q�2K#��y?pZ�v}s���2���Pြ��M��y���9�]�p�V��WAZ�$�����~��n8_*q���'��9.�@�L��96#�����8g\��8��ܵ����S+�P��"~>a� 8J�<�\~�H&���dY"4�X?�qY.��R;�<2�g#����j��|ᜲ�-2�XJ���Mۢ�c���H�����S����ɧ[C*������bҴ�Hۆz������[��9���o�_���K���n�����؃�����L���|���2�p��V��N����(�� ��;�6����ɬ��BbI �6��M����[s�Ol�tސ��{��{�(��.W�B�(ɫ��}����͉��Sco�]��O������ٟ�R"o�}���싻�8m'�L�{��4�x�=�����p8��Ῑf3�B o?wU�h��	E����?�3�R���ޥ��-�X*�%�������f��ڊŮ>t;V���4�-����=�n=+�[v��#�I�ў׫E+X����em-��!>���>D�S������իW�4�      E   �  x����r�0�k�)RB���D���J������H7�/	ODE��{!�!�K������߷�I��1C�R�����(Ea�s�~����%���fY�󫳳����a�L-N5�Km����~�j���Xr��W��'gS-���Y�LcC�ۅ��`W�Ԉ�j='Jʁ0d�^d0�Ĕ,�6�k��<���+*G�pYK�¯s�>u�4?P���/�z���� �h��)�g]����m��4��e���9/#�N�
"�?�|��*���r�!U��@��R��}���C��h��X*4Z��'V���v{���2�ރ�RC4�B6�*���w�iZ���L��&�F�0т������1'�����#��`������у4Խ��?�ǥ�5�򰳎q7���~�������	29/X`=d�H,ˮ�q�y�����T]Ö�~bx���J��k0��.
��1j�����r��9����`�;�#��O���]���>�!����'e��������P� ]b���`~�e�{L���c���l�o\�)X����u�=G��]aa�.w������3�6Y���D�/�&��c���Pl��z�]y3�-/4w����{�iurr�q�}�      F   �  x��WI�I<_1��o��G����g�����~,��Z�\t�
	VU�s[ܲ�[o.�юdC%U��|7��k�!�D%q�����숪Q�K��������������^�������޽���|j�_�S�������O��:�����i��a~����a}y�w|����a}zW��g�T��ֲ��}S�Q����e������L\R��T���vi��{[���r��r��g.���y:s�	x�I�lG�������9� A2����^=��d�:c����K�դJ
:c�����V+K��h���"G�z!���<�y~]��=t)5+n<w�I^b5�c�_G�����Qb�>���\s��*�'�lwDp��B�U���v^�yQ�vyp�Q佼�����5�j=<Y�%�6��-�<��$�!�W�T3\��u.y���|�zg:<D%~dg:���<өH��.8�2+�[w%���:�a�s�	�B��b�& �ez��K/��&L�W�L^ͤ4��	H�s�ճ^��襜\�u��L�_wDC+�Ҷb���08y"�z�&�f��*tYg�l�tl�����|{����� 4�j����EDp~���]��Z8.d�&��'3^~�Ԩ�u���[!~��Y���Ͳ]���)-3'��N)^yL�s/�Z�O��Y�p}샯j��C�\���}����Sӭl�]Z�bF}C����`6��i��|�(ui�3�ʣF��T�S]Đ��ԃV�a}�3�~A���3d��A9c���~��5�{��m;/�	���k)�cپ�K�ڌ{B�,8����D�Y<�5o��zf�a�P¦������p�֣R�8�c%=��Qw�d�=g�6to읅4�X�'����--�3Xt�ZV�Sw�����lj[�W^�;9��8b��ð�	5
Pv(X�Z��X	��s��0/�C8���}c�M�b��a#l������4i��a��ߴJe���/��(U$ᯂ��S�c: �!���C�ys��jW��"s؊�Z��E���]���&�pX�bS҄�˖]��MU��Dϩ'�]d$)n@�e�hF��#3n��L��f�A{��f��U��-�ɣ�լ���tf׀R��g�C��l8:������\�KN1`w�6��Bmﭵ[y-ȳr`�ZO�!W�K��gݓ�F-��#��ݞ=�
�׺P�̱Ą\f�[	o!�m�fk�'v��Ci0sZ�
!2
�	N|��6�%�ӹ�1h��1��e-JD�:ɂ�w�t[�h�@	�5XQ)�ޓ�֛!�Z��}
V(�3��e2>o�'�Y�XMZ��d(3�X$�܂���q���4 &�<^�x��?=d1��;�zQ��C��L��A�e.�Ic�	��X�ѿm�>��ox������
�TgAW��-n����$�D�      G   �  x�����+1Cד^x�`����1�鿄��`��Ib���M���K�[I�PJ�E:�ҫܻ�����kR�S��V�$M�Ҧ����6�.��p~� �i[�����+�[i�*�AN�r�Q������O�XR�P���ԩ�S,��f��\��dx���K;��%U�3�ܷ�;�2t���I�t��N1�>[s����J.Y4�:8��Ug��3jJm�&��&$���&/�ĵm��;�x���#N��ऍR��8�y�6���\�U���7*�h]K�#���άoQ�$g��Ѿi�Asf,�kڻ���7�/�7"����D2c`�������)���⿦zj�K�޽s��
2j�j�z����jNb	 g�1��&��oQA�]�2�l�wAu�ޑ�rU���EW� `��R�Vv,���89��cB��Eo�Fz�ߟ��@�y�<�����#��G���4�ZkNua��tϵ�=�"Ϲ�I��OgW����6�;?��f�9�Q��@�����Yџl��GAD�����e8�/��5��p���qS�{�)��A�V�',�8�yb0a�NPx��j��Xb�m\x�G���h玊��ņ��M��"��r�1NsD�����^��ؽ:�σ��� �����56�� Z�G���Q)d��L�h�ŗ�����V3�y'�@��7�m�.+�k2�l^����7���9nZ�}�DX����.u���o�@+�����п�����I�      H   v  x��XAr#�<��Bh.P� �f�ÎX{c}���P�pM�e��]��O�ǜ�&�5��d��Ndef5��|]=���~���J)k�$�X_�?�����A�G�\����=wm{X>|���8R���b�lN�ȣ�Tk!Z��)H�9�j�����x���C,����W'�l�D�]Y~��A���\�B������_�����e��w��z����������u;���w�y�ݯ�S�~��Nv��ڶ��z8��;��H�b�Z���G��X%UZv�<�ck
�K��w��Y�!��'iu����kc5R]C�i�^�ZZ�FR6�<���=]vڬo�n��=��%�Z����,�h��\s}�[$о��{1Zo�y�~^��o*!���QJ�p�jp�7�z+��[)״��ָjդ�s��fz�ЕkO��k�;ٓߑd��pA]̫��5�V����ZLZ|��/j����,/�tnT~�����ԃr1{�R^4��ҕXR�?��s�(T��	��Pq�4��(��/ٮ�h��� �=�t���x���h?���{l�n�d>y]-pZCⶖ�Omn�k�u�t8���^�t�.�R�ܮ�G	(���jZ˨9�b�U��ɏ�|��%�QP��uPk`�V)Tk���;.5$�}j�+c񥔷ǉ[�%��hH��
\F�����W�8Ȟ�.�ϓl9�̇�����!^kւ���8ty������/�FE�x�B�x�N�{�=��g��D��w �Ġq&�S�� ~)��'ʩU�^�{k}�q�|�L��<��]�0V��X��Ve �I���цg���� j_H��δ�Rv
>UiE��&��rVt��d���]2z��	���ls+�'V�s4hb���LY������ش�:�8Ϯ��ܒ4�����
�b�Ǵ��J�	YD����6T|�2�*�w2��-w{�{�� %U��F�kK7ccC���:��N�c�b���c;N��F@�V�6h!%qhզv��x_��u��Q/�|ң]��oe4���*F��rl��2�8 }	�w�H��v�Ђ~BYsR�/T.��-}�7���*��y9?U;]^ 	ࡒ��XjC/{`YF����FhT0QB@at�HT`Z�b�Z�2d�+$2%�v�i�=���m�o��joh#��bH-�ԣ��C����R�{�A1��4΍R{��U�ܴ"k��=��������ҿH|@Ƌe��<��j�-��W^�8�р��F��w���7�s4��3�=@�pV8|� �}�
;/�����~#�h�GG=ìf�p�(�4H<@�W��L����|�TP��j��Vn��~���̾D�[&y�>�z0� ��K�+��[����|���",�QG����P���:YK�"nU_U�%�6V% ������ߎ�Ov8�7b��2�$"kZ��B�f��t��B�:8-B�-.�i���+��A�X��i�¤!4-�Z/�2��#�q��
�`��"�pO>j�a�G��@c������&�����% <uc�$��-��-�z>�Q�~҇��o>q�����k=q�%Ҁ"Y��� 䙌#!��X�G�ī,Y�Z�&VW:��u�!/z�>��ۋ��إ���Ts��0��6��!9�h�&XCqnf�i�i,�4wK��H�:�a$����adg♖���h���H�@	��Nf��c�@+E����޹}x�`�����0�Ձ��F������h��=~<�Nw��nz�ǧӶ��I�z��$����a(��:f[�,N<Ò;"��E1]�
7a�5BA0��q&=OU��\ޱ�Mp璗��
����`��8�=!�`H���f���A	��b�ٲǨv�1��Y"�\,cJ�4����e����0�]N�;������䂫���HT;a�\�2G.�<�D(��Q��0	�V��텂�6e$#�
.�iM��n�#�+�0��s1�LO���r�[��&)��He�i�Ǣ&���=��"`L��3�f�Jt���E�a�[?��ҷ���P�o��<l�0�$��:�|o��4>b����RsI����fʂ!}��N��;��[�˝�ϟk��F�RChsR
�wG�Yb]r���z� L�����	�ݻw�����     