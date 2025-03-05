
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Reusable Produce Bags",
    description: "Replace single-use plastic produce bags with these washable mesh bags for fruits and vegetables.",
    price: "$12.99",
    category: "Kitchen",
    impact: "Eliminates dozens of plastic bags every month",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    title: "Stainless Steel Water Bottle",
    description: "Double-walled insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.",
    price: "$24.99",
    category: "Beverages",
    impact: "Replaces hundreds of single-use plastic bottles yearly",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    title: "Biodegradable Phone Case",
    description: "Protective phone case made from plant-based materials that fully biodegrades when composted.",
    price: "$29.99",
    category: "Electronics",
    impact: "Reduces plastic waste and microplastics in the environment",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    title: "Bamboo Toothbrush Set",
    description: "Pack of 4 toothbrushes with biodegradable bamboo handles and BPA-free bristles.",
    price: "$15.99",
    category: "Personal Care",
    impact: "Diverts plastic toothbrushes from landfills",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    link: "#"
  }
];

const EcoProducts = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
            Eco-Friendly Product Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Transitioning to sustainable products is a great way to reduce your environmental footprint. 
            Here are some eco-friendly alternatives to everyday items:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border border-border/40">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <span className="font-medium text-primary">{product.price}</span>
                  </div>
                  <p className="text-sm text-primary/70 mb-2">{product.category}</p>
                  <p className="text-foreground/70 mb-3">{product.description}</p>
                  <p className="text-sm font-medium mb-4">Impact: {product.impact}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EcoProducts;
