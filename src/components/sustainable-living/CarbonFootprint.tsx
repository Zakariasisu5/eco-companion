
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, Sliders } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider as SliderComponent } from "@/components/ui/slider";

const CarbonFootprint = () => {
  const { user } = useAuth();
  const [result, setResult] = useState<number | null>(null);
  const [housing, setHousing] = useState("apartment");
  const [housemates, setHousemates] = useState(1);
  const [transport, setTransport] = useState("car");
  const [diet, setDiet] = useState("mixed");
  const [shopping, setShopping] = useState(5);
  
  const handleCalculate = () => {
    // This is a very simplified calculation
    let score = 0;
    
    // Housing
    if (housing === "house") score += 10;
    else if (housing === "apartment") score += 5;
    
    // Divide by number of housemates
    score = score / Math.max(1, housemates);
    
    // Transportation
    if (transport === "car") score += 12;
    else if (transport === "public") score += 6;
    else if (transport === "bike") score += 1;
    
    // Diet
    if (diet === "meat_heavy") score += 15;
    else if (diet === "mixed") score += 10;
    else if (diet === "vegetarian") score += 5;
    else if (diet === "vegan") score += 3;
    
    // Shopping habits (1-10)
    score += shopping;
    
    setResult(Math.round(score * 100) / 100);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-primary" />
            Carbon Footprint Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Understand your environmental impact by calculating your approximate carbon footprint. 
            This simplified calculator helps you identify areas where you can make changes.
          </p>
          
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="housing">Housing Type</Label>
                <Select value={housing} onValueChange={setHousing}>
                  <SelectTrigger id="housing">
                    <SelectValue placeholder="Select housing type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="housemates">Number of Housemates</Label>
                <Input 
                  id="housemates" 
                  type="number" 
                  min="1" 
                  value={housemates} 
                  onChange={(e) => setHousemates(parseInt(e.target.value) || 1)} 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transport">Primary Transportation</Label>
              <Select value={transport} onValueChange={setTransport}>
                <SelectTrigger id="transport">
                  <SelectValue placeholder="Select transportation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Personal Car</SelectItem>
                  <SelectItem value="public">Public Transportation</SelectItem>
                  <SelectItem value="bike">Bike/Walk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="diet">Diet Type</Label>
              <Select value={diet} onValueChange={setDiet}>
                <SelectTrigger id="diet">
                  <SelectValue placeholder="Select diet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meat_heavy">Meat-Heavy</SelectItem>
                  <SelectItem value="mixed">Mixed Diet</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="shopping">Shopping Habits</Label>
                <span className="text-sm text-foreground/70">{shopping}/10</span>
              </div>
              <SliderComponent
                defaultValue={[5]}
                max={10}
                step={1}
                onValueChange={(value) => setShopping(value[0])}
              />
              <div className="flex justify-between text-xs text-foreground/70">
                <span>Mindful Consumer</span>
                <span>Heavy Consumer</span>
              </div>
            </div>
            
            <Button onClick={handleCalculate} className="w-full">Calculate Footprint</Button>
            
            {result !== null && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg text-center">
                <h3 className="font-medium mb-2">Your Estimated Carbon Footprint</h3>
                <div className="text-3xl font-bold text-primary mb-2">{result} tons CO2e/year</div>
                <p className="text-sm text-foreground/70">
                  {result < 8 ? 
                    "Your footprint is below average. Great job!" : 
                    "Your footprint is above average. Consider the suggestions below to reduce it."}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarbonFootprint;
