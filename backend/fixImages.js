// Quick fix script to update specific food items with working images
import mongoose from 'mongoose';
import foodModel from './models/foodModel.js';
import { connectDB } from './config/db.js';
import 'dotenv/config';

async function fixSpecificImages() {
    try {
        await connectDB();
        console.log('🔧 Fixing specific food item images...');

        // Update Margherita Pizza
        await foodModel.updateOne(
            { name: "Margherita Pizza" },
            { 
                image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=400&fit=crop"
            }
        );

        // Update Creamy Pasta
        await foodModel.updateOne(
            { name: "Creamy Pasta" },
            { 
                image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=400&fit=crop"
            }
        );

        // Add alternative pizza if the first one doesn't work
        const existingPizza = await foodModel.findOne({ name: "Margherita Pizza" });
        if (!existingPizza) {
            await foodModel.create({
                name: "Margherita Pizza",
                description: "Classic pizza with tomato sauce, mozzarella, and basil",
                price: 14,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
                category: "Pizza"
            });
        }

        // Add alternative pasta if the first one doesn't work
        const existingPasta = await foodModel.findOne({ name: "Creamy Pasta" });
        if (!existingPasta) {
            await foodModel.create({
                name: "Creamy Pasta",
                description: "Rich and creamy pasta with white sauce",
                price: 13,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=400&fit=crop",
                category: "Pasta"
            });
        }

        console.log('✅ Fixed Margherita Pizza and Creamy Pasta images!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error fixing images:', error);
        process.exit(1);
    }
}

fixSpecificImages();
