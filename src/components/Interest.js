'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Plus, Pencil, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const categories = ['All', 'Sports', 'Products', 'Teams', 'Athletes', 'Cities']

const defaultInterests = [
  {
    id: '1',
    name: 'Running',
    image: '/basketball.png',
    category: 'Sports'
  },
  {
    id: '2',
    name: 'Tennis',
    image: '/basketball.png',
    category: 'Sports'
  }
]

export default function InterestsSection() {
  const [interests, setInterests] = useState(defaultInterests)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isEditing, setIsEditing] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [newInterest, setNewInterest] = useState({
    name: '',
    category: 'Sports',
    image: ''
  })

  const filteredInterests = interests.filter(
    interest => selectedCategory === 'All' || interest.category === selectedCategory
  )
  const displayedInterests = showAll ? filteredInterests : filteredInterests.slice(0, 4)

  const handleAddInterest = () => {
    setInterests(prev => [...prev, { ...newInterest, id: Date.now().toString() }])
    setNewInterest({ name: '', category: 'Sports', image: '' })
    setIsDialogOpen(false)
  }

  const handleRemoveInterest = (id) => {
    setInterests(prev => prev.filter(interest => interest.id !== id))
  }

  return (
    <div className="py-6 mx-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium">Interests</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isEditing ? 'Done' : (
            <>
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>

      <nav className="mb-8">
        <ul className="flex gap-8 border-b overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`py-4 text-sm whitespace-nowrap hover:text-gray-900 border-b-2 -mb-[2px] transition-colors ${
                  category === selectedCategory
                    ? "border-black text-gray-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-gray-600 mb-8">
        Add your interests to shop a collection of products that are based on what you&apos;re into.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="group relative bg-gray-100 rounded-lg aspect-square flex flex-col items-center justify-center hover:bg-gray-200 transition-colors">
              <Plus className="w-8 h-8 text-gray-400 group-hover:text-gray-600 mb-2" />
              <span className="text-sm font-medium">Add Interests</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Interest</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); handleAddInterest(); }} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={newInterest.name}
                  onChange={(e) => setNewInterest(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Select
                  value={newInterest.category}
                  onValueChange={(value) => setNewInterest(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Image URL (optional)
                </label>
                <Input
                  id="image"
                  value={newInterest.image}
                  onChange={(e) => setNewInterest(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <Button type="submit" className="w-full">
                Add Interest
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {displayedInterests.map((interest) => (
          <div key={interest.id} className="group relative aspect-square rounded-lg overflow-hidden">
            {interest.image ? (
              <Image
                src={interest.image}
                alt={interest.name}
                className="object-cover transition-transform group-hover:scale-105"
                fill
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">{interest.name}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-medium">
              {interest.name}
            </span>
            {isEditing && (
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => handleRemoveInterest(interest.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      
      {filteredInterests.length > 4 && (
        <Button
          variant="outline"
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </Button>
      )}
    </div>
  )
}

