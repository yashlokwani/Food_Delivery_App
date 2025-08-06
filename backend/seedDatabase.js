import mongoose from 'mongoose';
import foodModel from './models/foodModel.js';
import { connectDB } from './config/db.js';
import 'dotenv/config';

// Sample food data with reliable image URLs
const sampleFoodData = [
    {
        name: "Greek Salad",
        description: "Fresh and healthy Greek salad with olives, feta cheese, and vegetables",
        price: 12,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        category: "Salad"
    },
    {
        name: "Veg Salad",
        description: "Mixed vegetable salad with fresh greens and dressing",
        price: 18,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        category: "Salad"
    },
    {
        name: "Clover Salad",
        description: "Nutritious clover salad with seasonal vegetables",
        price: 16,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        category: "Salad"
    },
    {
        name: "Chicken Salad",
        description: "Protein-rich chicken salad with mixed greens",
        price: 24,
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop",
        category: "Salad"
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 14,
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        category: "Pizza"
    },
    {
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni pizza with cheese",
        price: 16,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        category: "Pizza"
    },
    {
        name: "Chicken Burger",
        description: "Juicy chicken burger with lettuce and tomato",
        price: 18,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        category: "Burgers"
    },
    {
        name: "Beef Burger",
        description: "Classic beef burger with cheese and vegetables",
        price: 20,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
        category: "Burgers"
    },
    {
        name: "Vanilla Ice Cream",
        description: "Classic vanilla ice cream with rich flavor",
        price: 8,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
        category: "Desserts"
    },
    {
        name: "Chocolate Ice Cream",
        description: "Rich chocolate ice cream",
        price: 9,
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
        category: "Desserts"
    },
    {
        name: "Chicken Sandwich",
        description: "Grilled chicken sandwich with fresh vegetables",
        price: 12,
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop",
        category: "Sandwich"
    },
    {
        name: "Veggie Sandwich",
        description: "Healthy veggie sandwich with fresh ingredients",
        price: 10,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop",
        category: "Sandwich"
    },
    {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with frosting",
        price: 15,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        category: "Cake"
    },
    {
        name: "Strawberry Cake",
        description: "Sweet strawberry cake with fresh berries",
        price: 16,
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
        category: "Cake"
    },
    {
        name: "Spaghetti Bolognese",
        description: "Classic pasta with meat sauce",
        price: 14,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
        category: "Pasta"
    },
    {
        name: "Creamy Pasta",
        description: "Rich and creamy pasta with white sauce",
        price: 13,
        image: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg",
        category: "Pasta"
    },
    {
        name: "Stir Fry Noodles",
        description: "Asian-style stir-fried noodles with vegetables",
        price: 11,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        category: "Noodles"
    },
    {
        name: "Ramen Noodles",
        description: "Japanese ramen with rich broth",
        price: 15,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        category: "Noodles"
    },
    {
        name: "Grilled Chicken",
        description: "Perfectly grilled chicken breast",
        price: 18,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop",
        category: "Main Course"
    },
    {
        name: "Fish Fillet",
        description: "Fresh fish fillet with herbs",
        price: 22,
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
        category: "Main Course"
    }
];

async function seedDatabase() {
    try {
        console.log('🌱 Starting database seeding...');
        
        // Connect to database
        await connectDB();
        console.log('✅ Connected to database');
        
        // Clear existing food data
        const deleteResult = await foodModel.deleteMany({});
        console.log(`🗑️ Cleared ${deleteResult.deletedCount} existing food items`);
        
        // Insert sample food data
        const result = await foodModel.insertMany(sampleFoodData);
        console.log(`✅ Successfully added ${result.length} food items to database`);
        
        // Log some of the added items
        console.log('\n📋 Added items:');
        result.slice(0, 5).forEach(item => {
            console.log(`- ${item.name} (${item.category}) - ₹${item.price}`);
        });
        console.log(`... and ${result.length - 5} more items`);
        
        console.log('\n🎉 Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seeding function
seedDatabase();
