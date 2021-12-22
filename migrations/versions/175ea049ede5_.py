"""empty message

<<<<<<< HEAD:migrations/versions/175ea049ede5_.py
Revision ID: 175ea049ede5
Revises: 
Create Date: 2021-12-20 16:17:11.772248
=======
Revision ID: ca28c7f5bfc8
Revises: 
Create Date: 2021-12-16 09:42:08.706848
>>>>>>> 63843714462aab542b4daa9c65ff2300d88a7743:migrations/versions/ca28c7f5bfc8_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/175ea049ede5_.py
revision = '175ea049ede5'
=======
revision = 'ca28c7f5bfc8'
>>>>>>> 63843714462aab542b4daa9c65ff2300d88a7743:migrations/versions/ca28c7f5bfc8_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('account',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('_password', sa.String(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=True),
    sa.Column('cover_photo', sa.Text(), nullable=True),
    sa.Column('about', sa.Text(), nullable=True),
    sa.Column('instagram', sa.String(), nullable=True),
    sa.Column('facebook', sa.String(), nullable=True),
    sa.Column('_is_active', sa.Boolean(), nullable=False),
    sa.Column('_is_waterdropper', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('news',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('specie',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('is_reported', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sport',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('account_sport',
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['sport_id'], ['sport.id'], ),
    sa.PrimaryKeyConstraint('account_id', 'sport_id')
    )
    op.create_table('center',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('web', sa.String(), nullable=True),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('hotspot',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=False),
    sa.Column('level', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('latitude', sa.String(), nullable=True),
    sa.Column('longitude', sa.String(), nullable=True),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['sport_id'], ['sport.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('waterdropper',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('level', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review_centre',
    sa.Column('message', sa.String(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('puntuation', sa.Float(), nullable=False),
    sa.Column('waterdropper_id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.ForeignKeyConstraint(['waterdropper_id'], ['waterdropper.id'], ),
    sa.PrimaryKeyConstraint('waterdropper_id', 'center_id')
    )
    op.create_table('review_hotspot',
    sa.Column('message', sa.String(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('puntuation', sa.Float(), nullable=False),
    sa.Column('waterdropper_id', sa.Integer(), nullable=False),
    sa.Column('hotspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotspot_id'], ['hotspot.id'], ),
    sa.ForeignKeyConstraint(['waterdropper_id'], ['waterdropper.id'], ),
    sa.PrimaryKeyConstraint('waterdropper_id', 'hotspot_id')
    )
    op.create_table('species_hotspot',
    sa.Column('specie_id', sa.Integer(), nullable=False),
    sa.Column('hotspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotspot_id'], ['hotspot.id'], ),
    sa.ForeignKeyConstraint(['specie_id'], ['specie.id'], ),
    sa.PrimaryKeyConstraint('specie_id', 'hotspot_id')
    )
    op.create_table('waterdropper_fav_center',
    sa.Column('waterdropper_id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.ForeignKeyConstraint(['waterdropper_id'], ['waterdropper.id'], ),
    sa.PrimaryKeyConstraint('waterdropper_id', 'center_id')
    )
    op.create_table('waterdropper_fav_spot',
    sa.Column('waterdropper_id', sa.Integer(), nullable=False),
    sa.Column('hotspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotspot_id'], ['hotspot.id'], ),
    sa.ForeignKeyConstraint(['waterdropper_id'], ['waterdropper.id'], ),
    sa.PrimaryKeyConstraint('waterdropper_id', 'hotspot_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('waterdropper_fav_spot')
    op.drop_table('waterdropper_fav_center')
    op.drop_table('species_hotspot')
    op.drop_table('review_hotspot')
    op.drop_table('review_centre')
    op.drop_table('waterdropper')
    op.drop_table('hotspot')
    op.drop_table('center')
    op.drop_table('account_sport')
    op.drop_table('sport')
    op.drop_table('specie')
    op.drop_table('news')
    op.drop_table('account')
    # ### end Alembic commands ###
