def load_seed_data():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        for row in rows:
            inserted = insert(ModelClass).values(**row)
            #import IPython; IPython.embed()
            try:
                models.db.session.execute(inserted)
                models.db.session.commit()
            except IntegrityError as e:
                print(f'ERROR: inserting row {row} in "{table}". IGNORING')
                print(e)

    models.db.session.execute('''
        DO $$
        DECLARE
        i TEXT;
        BEGIN
        FOR i IN (
            SELECT 'SELECT SETVAL('
                || quote_literal(quote_ident(PGT.schemaname) || '.' || quote_ident(S.relname))
                || ', COALESCE(MAX(' ||quote_ident(C.attname)|| '), 1) ) FROM '
                || quote_ident(PGT.schemaname)|| '.'||quote_ident(T.relname)|| ';'
            FROM pg_class AS S,
                pg_depend AS D,
                pg_class AS T,
                pg_attribute AS C,
                pg_tables AS PGT
            WHERE S.relkind = 'S'
            AND S.oid = D.objid
            AND D.refobjid = T.oid
            AND D.refobjid = C.attrelid
            AND D.refobjsubid = C.attnum
            AND T.relname = PGT.tablename
        ) LOOP
            EXECUTE i;
        END LOOP;
        END $$;
    ''')
    models.db.session.commit()