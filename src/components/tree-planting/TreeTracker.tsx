
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Plus, Calendar, MapPin } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/AuthContext";

const TreeTracker = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [treeSpecies, setTreeSpecies] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  
  // Mock data for trees planted
  const [treesPlanted, setTreesPlanted] = useState([
    {
      id: 1,
      species: "Norway Maple",
      date: "2023-05-12",
      location: "Local Park",
      notes: "Planted with community group",
      co2: 21.5
    },
    {
      id: 2,
      species: "Red Oak",
      date: "2023-06-24",
      location: "Backyard",
      notes: "Birthday tree for daughter",
      co2: 25.8
    },
    {
      id: 3,
      species: "Douglas Fir",
      date: "2023-08-03",
      location: "Community Garden",
      notes: "Part of city greening initiative",
      co2: 30.2
    }
  ]);
  
  const totalCO2 = treesPlanted.reduce((sum, tree) => sum + tree.co2, 0);
  
  const handleAddTree = () => {
    if (!treeSpecies || !plantingDate || !location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Calculate a random CO2 value between 20-35
    const co2Value = Math.round((20 + Math.random() * 15) * 10) / 10;
    
    const newTree = {
      id: treesPlanted.length + 1,
      species: treeSpecies,
      date: plantingDate,
      location,
      notes,
      co2: co2Value
    };
    
    setTreesPlanted([...treesPlanted, newTree]);
    
    // Reset form
    setTreeSpecies("");
    setPlantingDate("");
    setLocation("");
    setNotes("");
    
    // Close dialog
    setIsAddDialogOpen(false);
    
    toast({
      title: "Tree added!",
      description: "Your tree has been added to your tracking record.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-between">
            <div className="flex items-center">
              <TreePine className="mr-2 h-5 w-5 text-primary" />
              Your Tree Planting Record
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Tree
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a Planted Tree</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="species">Tree Species</Label>
                    <Select value={treeSpecies} onValueChange={setTreeSpecies}>
                      <SelectTrigger id="species">
                        <SelectValue placeholder="Select species" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Red Oak">Red Oak</SelectItem>
                        <SelectItem value="Silver Maple">Silver Maple</SelectItem>
                        <SelectItem value="White Pine">White Pine</SelectItem>
                        <SelectItem value="Douglas Fir">Douglas Fir</SelectItem>
                        <SelectItem value="Norway Maple">Norway Maple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plantingDate">Planting Date</Label>
                    <Input 
                      id="plantingDate"
                      type="date"
                      value={plantingDate}
                      onChange={(e) => setPlantingDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location"
                      placeholder="Where did you plant it?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea 
                      id="notes"
                      placeholder="Any additional details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                  
                  <Button onClick={handleAddTree} className="w-full">Add Tree</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center">
            <div className="w-full sm:w-1/3 bg-primary/5 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-primary mb-1">{treesPlanted.length}</h3>
              <p className="text-sm text-foreground/70">Trees Planted</p>
            </div>
            
            <div className="w-full sm:w-1/3 bg-green-500/10 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-1">{totalCO2.toFixed(1)} kg</h3>
              <p className="text-sm text-foreground/70">CO₂ Absorption Per Year</p>
            </div>
            
            <div className="w-full sm:w-1/3 bg-blue-500/10 rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-1">{(totalCO2 * 0.12).toFixed(1)} m²</h3>
              <p className="text-sm text-foreground/70">Canopy Coverage</p>
            </div>
          </div>
          
          <h3 className="font-medium mb-4">Your Trees</h3>
          
          {treesPlanted.length > 0 ? (
            <div className="space-y-4">
              {treesPlanted.map((tree) => (
                <Card key={tree.id} className="overflow-hidden border border-border/40">
                  <div className="p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{tree.species}</h4>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-foreground/70 mt-1">
                          <span className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {new Date(tree.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {tree.location}
                          </span>
                        </div>
                        {tree.notes && (
                          <p className="mt-2 text-sm">{tree.notes}</p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500/10 px-3 py-1.5 rounded-lg">
                          <span className="text-xs text-foreground/70">CO₂/Year</span>
                          <p className="font-medium text-green-600">{tree.co2} kg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
              <TreePine className="h-12 w-12 text-primary/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No trees recorded yet</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Start tracking your tree planting efforts to see your environmental impact.
              </p>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Your First Tree
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TreeTracker;
