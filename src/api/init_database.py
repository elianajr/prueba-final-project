import os
from flask import Flask
from flask_migrate import Migrate
from sqlalchemy import Table, insert
from sqlalchemy.exc import IntegrityError
import models
from seed_data import data


def load_seed_data():
    for table, rows in data.items():
        ModelClass = getattr(models, table)
        for row in rows:
            #print(row)
            inserted = insert(ModelClass).values(**row)
            try:
                models.db.session.execute(inserted)
                models.db.session.commit()
            except IntegrityError as e:
                print(f'ERROR: inserting row {row} in "{table}". IGNORING')
                print(e)
load_seed_data()