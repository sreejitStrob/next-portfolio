import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '@/lib/sequelize';  // import your Sequelize instance

// Define the interface for the attributes of the model
interface PostAttributes {
  id: number;
  title: string;
  slug?: string | null;
  content: string;
  is_featured: boolean;
  sort_order?: number | null;
  is_deleted: boolean;
  is_active: boolean;
  created_at: Date;
  modified_at: Date;
}

// Define the interface for creating new posts (without 'id' field, because it's auto-incremented)
interface PostCreationAttributes extends Optional<PostAttributes, 'id' | 'slug' | 'sort_order'> {}

// Create the Post model by extending the Sequelize Model class
class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public slug?: string | null;
  public content!: string;
  public is_featured!: boolean;
  public sort_order?: number | null;
  public is_deleted!: boolean;
  public is_active!: boolean;
  public created_at!: Date;
  public modified_at!: Date;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model with Sequelize
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_featured: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    modified_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize, // passing the sequelize instance
    modelName: 'Post', // name of the model
    tableName: 'post', // name of the table in the database
    timestamps: false, // Disable Sequelize's automatic timestamps (we are manually managing `created_at` and `modified_at`)
    underscored: true, // Optional: Convert camelCase to snake_case for column names
  }
);

export default Post;
