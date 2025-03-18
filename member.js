function skillsMember() {
  return {
    name: 'John',
    skills: ['JavaScript', 'React', 'Node.js'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  };
}