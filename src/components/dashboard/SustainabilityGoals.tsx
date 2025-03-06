
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Target, Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const goals = [
  {
    title: "Reduce waste by 30%",
    progress: 65,
    dueDate: "April 15, 2025"
  },
  {
    title: "Bike to work 3x per week",
    progress: 33,
    dueDate: "March 30, 2025"
  },
  {
    title: "Switch to LED lighting",
    progress: 100,
    dueDate: "Completed",
    completed: true
  }
];

const SustainabilityGoals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="mr-2 h-5 w-5 text-primary" />
          Sustainability Goals
        </CardTitle>
        <CardDescription>
          Track your environmental targets
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                {goal.completed ? (
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-muted mr-2" />
                )}
                <span className={goal.completed ? "line-through text-muted-foreground" : ""}>
                  {goal.title}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{goal.dueDate}</span>
            </div>
            <Progress value={goal.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add New Goal
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SustainabilityGoals;
