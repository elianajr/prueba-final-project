"""empty message

Revision ID: 526ab6556ef3
Revises: 2807edd385a2
Create Date: 2021-12-01 15:37:04.765266

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '526ab6556ef3'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('chat',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('news',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('specie',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('photo', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('is_reported', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sport',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('account',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=False),
    sa.Column('chat_id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('_password', sa.String(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=True),
    sa.Column('_is_active', sa.Boolean(), nullable=False),
    sa.Column('_is_waterdropper', sa.Boolean(), nullable=False),
    sa.Column('_is_center', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['chat_id'], ['chat.id'], ),
    sa.ForeignKeyConstraint(['sport_id'], ['sport.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
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
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('hotspot',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('specie_id', sa.Integer(), nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('photo', sa.Text(), nullable=False),
    sa.Column('level', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('geometry', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['specie_id'], ['specie.id'], ),
    sa.ForeignKeyConstraint(['sport_id'], ['sport.id'], ),
    sa.PrimaryKeyConstraint('id', 'sport_id')
    )
    op.create_table('waterdropper',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('level', sa.Enum('Beginner', 'Intermediate', 'Advanced', 'Professional'), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('account_fav_center',
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.PrimaryKeyConstraint('account_id', 'center_id')
    )
    op.create_table('account_fav_spot',
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('hotspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['hotspot_id'], ['hotspot.id'], ),
    sa.PrimaryKeyConstraint('account_id', 'hotspot_id')
    )
    op.create_table('center_sport',
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.ForeignKeyConstraint(['sport_id'], ['sport.id'], ),
    sa.PrimaryKeyConstraint('center_id', 'sport_id')
    )
    op.create_table('review_spot',
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('hotspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['hotspot_id'], ['hotspot.id'], ),
    sa.PrimaryKeyConstraint('account_id', 'hotspot_id')
    )
    op.create_table('reviewcenter',
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.PrimaryKeyConstraint('account_id', 'center_id')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('reviewcenter')
    op.drop_table('review_spot')
    op.drop_table('center_sport')
    op.drop_table('account_fav_spot')
    op.drop_table('account_fav_center')
    op.drop_table('waterdropper')
    op.drop_table('hotspot')
    op.drop_table('center')
    op.drop_table('account_sport')
    op.drop_table('account')
    op.drop_table('sport')
    op.drop_table('specie')
    op.drop_table('news')
    op.drop_table('chat')
    # ### end Alembic commands ###
