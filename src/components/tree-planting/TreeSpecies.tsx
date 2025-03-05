
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Leaf, TreePine, Wind, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const treeCategories = [
  { value: "shade", label: "Shade Trees" },
  { value: "fruit", label: "Fruit Trees" },
  { value: "native", label: "Native Species" },
  { value: "evergreen", label: "Evergreens" }
];

const treeSpecies = {
  shade: [
    {
      name: "Red Maple",
      scientific: "Acer rubrum",
      description: "Fast-growing maple with stunning red fall foliage, provides excellent shade and wildlife habitat.",
      benefits: ["Shade", "Wildlife Habitat", "Fall Color"],
      co2: "48 kg/year",
      height: "40-60 ft",
      growth: "Medium-Fast (13-24 in/year)",
      image: "https://images.unsplash.com/photo-1588895364476-216c7297f68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Northern Red Oak",
      scientific: "Quercus rubra",
      description: "Long-lived oak with broad canopy and excellent shade. Resistant to air pollution and adaptable to various soils.",
      benefits: ["Shade", "Longevity", "Air Purification"],
      co2: "55 kg/year",
      height: "60-75 ft",
      growth: "Medium (12-18 in/year)",
      image: "https://images.unsplash.com/photo-1565193566173-7a0bff4b2a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ],
  fruit: [
    {
      name: "Apple Tree",
      scientific: "Malus domestica",
      description: "Hardy fruit tree that provides delicious apples and spring blossoms. Many varieties available for different climates.",
      benefits: ["Food Production", "Pollinator Support", "Ornamental"],
      co2: "22 kg/year",
      height: "15-30 ft",
      growth: "Slow-Medium (8-12 in/year)",
      image: "https://images.unsplash.com/photo-1561463427-00aa43e9917b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cherry Tree",
      scientific: "Prunus avium",
      description: "Beautiful tree with spring blossoms and summer fruit. Both ornamental and productive varieties available.",
      benefits: ["Food Production", "Beauty", "Pollinator Support"],
      co2: "25 kg/year",
      height: "15-25 ft",
      growth: "Medium (12-15 in/year)",
      image: "https://images.unsplash.com/photo-1522509585149-c9cd255289ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ],
  native: [
    {
      name: "American Sycamore",
      scientific: "Platanus occidentalis",
      description: "Native tree with distinctive mottled bark and large leaves. Excellent for riparian zones and urban settings.",
      benefits: ["Wildlife Support", "Erosion Control", "Air Purification"],
      co2: "50 kg/year",
      height: "75-100 ft",
      growth: "Fast (24+ in/year)",
      image: "https://images.unsplash.com/photo-1585222515068-7201a72c4181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Eastern Redbud",
      scientific: "Cercis canadensis",
      description: "Small native tree with stunning pink-purple flowers in early spring, heart-shaped leaves provide moderate shade.",
      benefits: ["Pollinator Support", "Ornamental", "Understory Diversity"],
      co2: "18 kg/year",
      height: "20-30 ft",
      growth: "Medium (13-18 in/year)",
      image: "https://images.unsplash.com/photo-1594067592023-58b7d0510360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ],
  evergreen: [
    {
      name: "Eastern White Pine",
      scientific: "Pinus strobus",
      description: "Fast-growing conifer with soft, blue-green needles. Excellent windbreak and year-round screening.",
      benefits: ["Year-round Greenery", "Wildlife Habitat", "Windbreak"],
      co2: "40 kg/year",
      height: "50-80 ft",
      growth: "Fast (12-24 in/year)",
      image: "https://images.unsplash.com/photo-1547899902-b2c1bf254370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Colorado Blue Spruce",
      scientific: "Picea pungens",
      description: "Distinctive blue-silver foliage on a pyramidal evergreen tree. Drought-tolerant once established.",
      benefits: ["Winter Interest", "Windbreak", "Wildlife Shelter"],
      co2: "38 kg/year",
      height: "30-60 ft",
      growth: "Slow-Medium (10-12 in/year)",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ]
};

const TreeSpecies = () => {
  const [category, setCategory] = React.useState('shade');
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Info className="mr-2 h-5 w-5 text-primary" />
            Tree Species Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Different tree species offer various benefits to the environment and your property. 
            Learn about the best trees to plant based on your goals and local climate.
          </p>
          
          <Tabs
            value={category}
            onValueChange={setCategory}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
              {treeCategories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(treeSpecies).map(([key, trees]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                {trees.map((tree, index) => (
                  <Card key={index} className="overflow-hidden border border-border/40">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="h-60 md:h-auto">
                        <img 
                          src={tree.image} 
                          alt={tree.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold">{tree.name}</h3>
                          <p className="text-sm italic text-foreground/70">{tree.scientific}</p>
                        </div>
                        
                        <p className="mb-4">{tree.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center">
                            <TreePine className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Height: {tree.height}</span>
                          </div>
                          <div className="flex items-center">
                            <Wind className="h-4 w-4 text-blue-500 mr-2" />
                            <span className="text-sm">Growth: {tree.growth}</span>
                          </div>
                          <div className="flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">CO₂: {tree.co2}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tree.benefits.map((benefit, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                        
                        <Button variant="outline" size="sm">Learn More</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TreeSpecies;
