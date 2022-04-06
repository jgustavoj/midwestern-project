"""empty message

Revision ID: 6fc4d7012507
Revises: f593bc7baf9a
Create Date: 2022-04-05 18:59:22.904506

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6fc4d7012507'
down_revision = 'f593bc7baf9a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('home', sa.Column('image_url', sa.String(length=250), nullable=False))
    op.create_unique_constraint(None, 'home', ['image_url'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'home', type_='unique')
    op.drop_column('home', 'image_url')
    # ### end Alembic commands ###
