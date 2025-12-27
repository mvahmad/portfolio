"use client"
import { motion } from "framer-motion";
import { Code, Heart, Rocket, Target, TrendingUp, Zap } from "lucide-react";

const featuresItem = [
    {"itemName1":"Fast","itemname2":"delivery","icone": <Zap className="w-5 h-5 text-slate-800" />},
    {"itemName1":"Modern","itemname2":"technology","icone": <Code className="w-5 h-5 text-slate-800" />},
    {"itemName1":"Conversion","itemname2":"focused","icone": <Target className="w-5 h-5 text-slate-800" />},
    {"itemName1":"Built for","itemname2":"growth","icone": <TrendingUp className="w-5 h-5 text-slate-800" />},
    {"itemName1":"Launch","itemname2":"ready","icone":<Rocket className="w-5 h-5 text-slate-800" />},
    {"itemName1":"Client","itemname2":"satisfaction","icone":<Heart className="w-5 h-5 text-slate-800 font-bold" />},
]
export default function FeaturesSection (){
    return( 
         <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
            <section className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-4
        dark:bg-black/50 dark:border-white/10 my-3 shadow-md">
        <div className="px-3 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {featuresItem.map((i,index)=>{
            return(
            <div key={index} className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  {i.icone}
                </div>
              </div>
              <div>
                <div className="text-gray-800 font-bold text-sm mb-1">{i.itemName1}</div>
                <div className="text-gray-800 font-bold text-xs">{i.itemname2}</div>
              </div>
            </div>
            )
            })}
          </div>
        </div>
      </section>
    </motion.div>
    )
    
}