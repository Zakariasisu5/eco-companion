
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

export const WasteTrackingForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [wasteType, setWasteType] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('kg');
  const [notes, setNotes] = useState('');
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Error",
        description: "You need to be logged in to track waste",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from('waste_tracking').insert({
        waste_type: wasteType,
        amount: Number(amount),
        unit,
        notes,
        user_id: user.id
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Waste tracking entry added successfully",
      });

      setWasteType('');
      setAmount('');
      setUnit('kg');
      setNotes('');
      onSubmit();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add waste tracking entry",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="wasteType">Waste Type</Label>
        <Select value={wasteType} onValueChange={setWasteType} required>
          <SelectTrigger id="wasteType">
            <SelectValue placeholder="Select waste type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General">General Waste</SelectItem>
            <SelectItem value="Recycling">Recycling</SelectItem>
            <SelectItem value="Organic">Organic Waste</SelectItem>
            <SelectItem value="Hazardous">Hazardous Waste</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Select value={unit} onValueChange={setUnit}>
            <SelectTrigger id="unit">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kg">Kilograms (kg)</SelectItem>
              <SelectItem value="lbs">Pounds (lbs)</SelectItem>
              <SelectItem value="l">Liters (L)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any additional notes..."
        />
      </div>

      <Button type="submit">Add Entry</Button>
    </form>
  );
};
