import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FantasyCharacter } from '../types';
import { CharacterIcon } from './CharacterIcon';
import { CharacterPortrait } from './CharacterPortrait';
import { 
  Copy, 
  Check, 
  Sparkles, 
  Compass, 
  Shield, 
  Heart, 
  Swords, 
  Scroll, 
  Bookmark, 
  BookmarkCheck, 
  RotateCw,
  Flame,
  Wand2
} from 'lucide-react';

interface CharacterCardProps {
  character: FantasyCharacter | null;
  isRolling: boolean;
  onGeneratePortrait?: () => void;
  onRegeneratePortrait?: () => void;
  isGeneratingPortrait?: boolean;
  onGenerateBackstory?: () => void;
  isGeneratingBackstory?: boolean;
  onSaveToDeck?: (char: FantasyCharacter) => void;
  isSavedInDeck?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  isRolling,
  onGeneratePortrait,
  onRegeneratePortrait,
  isGeneratingPortrait,
  onGenerateBackstory,
  isGeneratingBackstory,
  onSaveToDeck,
  isSavedInDeck = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!character) return;
    const backstoryText = character.backstory ? `\nBackstory: ${character.backstory}` : '';
    const text = `${character.name} - ${character.className} (${character.title})\nHP: ${character.stats.health} | MP: ${character.stats.mana} | STR: ${character.stats.strength}\nArmament: ${character.primaryWeapon}\nOrigin: ${character.origin}${backstoryText}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback
    }
  };

  if (!character) {
    return (
      <div
        id="character-empty-state"
        className="w-full max-w-xl mx-auto rounded-sm border-2 border-[#c9a050]/40 bg-[#161412] p-10 text-center relative shadow-2xl arcane-card-glow"
      >
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#c9a050] pointer-events-none" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#c9a050] pointer-events-none" />
        <div className="w-18 h-18 mx-auto mb-5 rounded-full border border-[#c9a050]/30 flex items-center justify-center bg-[#1e1b18] text-[#c9a050]">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="font-fantasy-name text-3xl font-light text-[#f0ebe1] mb-2 tracking-wide">
          The Alchemist's Transmutation Seal
        </h2>
        <div className="w-20 h-[1px] bg-[#c9a050]/40 mx-auto my-4" />
        <p className="text-[#a1998c] text-sm max-w-md mx-auto leading-relaxed">
          Invoke a new adventurer to inscribe their celestial name, player card attributes, Health, Mana, Strength, and sacred origin story.
        </p>
      </div>
    );
  }

  // Calculate percentage ratios for visual bars
  const maxHp = 600;
  const maxMp = 700;
  const maxStr = 100;
  const hpPercent = Math.min(100, Math.round((character.stats.health / maxHp) * 100));
  const mpPercent = Math.min(100, Math.round((character.stats.mana / maxMp) * 100));
  const strPercent = Math.min(100, Math.round((character.stats.strength / maxStr) * 100));

  return (
    <div className="w-full max-w-xl mx-auto relative group">
      <AnimatePresence mode="wait">
        <motion.div
          key={character.id}
          id="character-card-container"
          initial={{ opacity: 0, y: 16, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.985 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-md border-2 border-[#c9a050]/70 bg-[#161412] shadow-[0_12px_45px_rgba(0,0,0,0.85)] p-5 sm:p-8 arcane-card-glow"
        >
          {/* Ornate Gold Filigree Corner Brackets (Traditional Bordered Player Card Aesthetics) */}
          <div className="absolute -top-3.5 -left-3.5 w-7 h-7 border-t-2 border-l-2 border-[#eab308] pointer-events-none" />
          <div className="absolute -top-3.5 -right-3.5 w-7 h-7 border-t-2 border-r-2 border-[#eab308] pointer-events-none" />
          <div className="absolute -bottom-3.5 -left-3.5 w-7 h-7 border-b-2 border-l-2 border-[#eab308] pointer-events-none" />
          <div className="absolute -bottom-3.5 -right-3.5 w-7 h-7 border-b-2 border-r-2 border-[#eab308] pointer-events-none" />

          {/* Card Frame Inner Inset Line */}
          <div className="absolute inset-1.5 rounded-xs border border-[#c9a050]/20 pointer-events-none" />

          {/* Top Player Card Header Bar */}
          <div className="relative z-10 flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#c9a050]/25">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#241f1a] border border-[#c9a050]/40 text-[#c9a050] text-[10px] font-bold uppercase tracking-[0.25em]">
                <Flame className="w-3 h-3 text-[#f59e0b]" /> Hero Card
              </span>
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#857e72]">
                Tier I Legendary
              </span>
            </div>

            {/* Quick Actions: Save to Deck & Copy */}
            <div className="flex items-center gap-2">
              {onSaveToDeck && (
                <button
                  id="btn-save-to-deck-header"
                  data-testid="save-to-deck-button"
                  onClick={() => onSaveToDeck(character)}
                  type="button"
                  title="Save hero to My Deck"
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xs border text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    isSavedInDeck
                      ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                      : 'border-[#c9a050]/50 bg-[#221d17] text-[#c9a050] hover:bg-[#c9a050] hover:text-[#0c0c0c]'
                  }`}
                >
                  {isSavedInDeck ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Save to Deck</span>
                      <span className="text-[10px] text-amber-300 font-normal">✓</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save to Deck</span>
                    </>
                  )}
                </button>
              )}

              <button
                id="btn-copy-character"
                onClick={handleCopy}
                type="button"
                title="Copy character stats and details"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs border border-[#c9a050]/30 bg-[#1d1a16] text-[#c9a050] hover:bg-[#c9a050]/15 text-xs uppercase tracking-wider font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Character Identity: Class, Name, Title */}
          <div className="relative z-10 flex flex-col items-center text-center mb-5">
            {/* Class Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201c18] border border-[#c9a050]/40 text-[#c9a050] text-xs font-semibold uppercase tracking-[0.25em] mb-2 shadow-xs">
              <CharacterIcon iconName={character.iconName} className="w-3.5 h-3.5 text-[#eab308]" />
              <span id="character-class-badge">{character.className}</span>
            </div>

            {/* Character Name in Fantasy Font ("Cinzel Decorative" / "Uncial Antiqua") */}
            <h2
              id="character-name-display"
              className="font-fantasy-name text-2xl sm:text-4xl lg:text-5xl font-bold text-[#fbf7ee] tracking-wide mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              {character.name}
            </h2>

            {/* Character Title */}
            <p
              id="character-title-display"
              className="text-[#baa481] italic text-sm sm:text-base font-medium mb-4 tracking-wide font-serif-hero"
            >
              "{character.title}"
            </p>

            {/* Video-Game / Cartoon Character Portrait with Dedicated Buttons */}
            <CharacterPortrait
              character={character}
              portrait={character.portrait}
              onGenerate={onGeneratePortrait || (() => {})}
              onRegenerate={onRegeneratePortrait || (() => {})}
              isGenerating={isGeneratingPortrait}
            />

            {/* Gold Filigree Divider */}
            <div className="flex items-center justify-center gap-2 w-full my-4 opacity-70">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a050] to-transparent flex-1 max-w-[120px]" />
              <div className="w-2 h-2 rotate-45 border border-[#c9a050] bg-[#161412]" />
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a050] to-transparent flex-1 max-w-[120px]" />
            </div>

            {/* Short Flavor Description */}
            <p
              id="character-lore-section"
              className="text-[#9e968a] text-xs sm:text-sm leading-relaxed max-w-lg mb-1"
            >
              {character.flavor}
            </p>
          </div>

          {/* =========================================================================
              PROMINENT RANDOM STATS SECTION: HEALTH, MANA, AND STRENGTH
             ========================================================================= */}
          <div
            id="player-card-combat-stats"
            className="relative z-10 mb-5 p-4 rounded-sm bg-[#12100e] border border-[#c9a050]/30 shadow-inner"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#c9a050] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#c9a050]" />
                Combat Attributes
              </span>
              <span className="text-[10px] text-[#736e65] uppercase tracking-wider">
                Class Scaled
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* HEALTH STAT */}
              <div
                id="stat-box-health"
                className="p-3 rounded-xs bg-[#191512] border border-red-900/40 flex flex-col justify-between group/stat hover:border-red-600/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-red-400">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
                    <span className="text-xs font-bold uppercase tracking-wider">Health</span>
                  </div>
                  <span className="text-base font-bold text-red-200 font-mono">
                    {character.stats.health}
                  </span>
                </div>
                <div className="w-full bg-[#2a1717] h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-gradient-to-r from-red-600 to-rose-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${hpPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-[#827870] mt-1">
                  <span>HP Gauge</span>
                  <span>{hpPercent}%</span>
                </div>
              </div>

              {/* MANA STAT */}
              <div
                id="stat-box-mana"
                className="p-3 rounded-xs bg-[#191512] border border-cyan-900/40 flex flex-col justify-between group/stat hover:border-cyan-500/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">Mana</span>
                  </div>
                  <span className="text-base font-bold text-cyan-200 font-mono">
                    {character.stats.mana}
                  </span>
                </div>
                <div className="w-full bg-[#12222d] h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-gradient-to-r from-cyan-600 to-sky-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${mpPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-[#827870] mt-1">
                  <span>MP Pool</span>
                  <span>{mpPercent}%</span>
                </div>
              </div>

              {/* STRENGTH STAT */}
              <div
                id="stat-box-strength"
                className="p-3 rounded-xs bg-[#191512] border border-amber-900/40 flex flex-col justify-between group/stat hover:border-amber-500/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Swords className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">Strength</span>
                  </div>
                  <span className="text-base font-bold text-amber-200 font-mono">
                    {character.stats.strength}
                  </span>
                </div>
                <div className="w-full bg-[#2a2215] h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-gradient-to-r from-amber-600 to-yellow-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${strPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-[#827870] mt-1">
                  <span>STR Power</span>
                  <span>{character.stats.strength} / 100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Armament & Origin Badges */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div className="rounded-xs border border-[#c9a050]/20 bg-[#141210] p-3 flex items-start gap-2.5">
              <div className="p-1.5 rounded-xs bg-[#1f1b17] border border-[#c9a050]/30 text-[#c9a050] shrink-0">
                <Wand2 className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[9px] font-bold text-[#c9a050] uppercase tracking-wider">
                  Favored Armament
                </span>
                <span className="text-xs font-medium text-[#e8e2d8] truncate block">
                  {character.primaryWeapon}
                </span>
              </div>
            </div>

            <div className="rounded-xs border border-[#c9a050]/20 bg-[#141210] p-3 flex items-start gap-2.5">
              <div className="p-1.5 rounded-xs bg-[#1f1b17] border border-[#c9a050]/30 text-[#c9a050] shrink-0">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[9px] font-bold text-[#c9a050] uppercase tracking-wider">
                  Homeland Sanctum
                </span>
                <span className="text-xs font-medium text-[#e8e2d8] truncate block">
                  {character.origin}
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              GENERATE BACKSTORY SECTION (1-TO-2 SENTENCE ORIGIN STORY)
             ========================================================================= */}
          <div
            id="character-backstory-section"
            className="relative z-10 p-4 rounded-sm bg-[#181512] border border-[#c9a050]/35 mb-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[#c9a050]">
                <Scroll className="w-4 h-4 text-[#eab308]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Hero Backstory & Origin
                </span>
              </div>

              {/* Generate Backstory Button */}
              {onGenerateBackstory && (
                <button
                  id="btn-generate-backstory"
                  data-testid="generate-backstory"
                  aria-label="Generate Backstory"
                  type="button"
                  onClick={onGenerateBackstory}
                  disabled={isGeneratingBackstory}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs border border-[#c9a050]/40 bg-[#241f19] hover:bg-[#c9a050] hover:text-[#0c0c0c] text-[#c9a050] text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer disabled:opacity-50"
                >
                  <RotateCw className={`w-3 h-3 ${isGeneratingBackstory ? 'animate-spin' : ''}`} />
                  <span>Generate Backstory</span>
                </button>
              )}
            </div>

            {/* Backstory Display Box */}
            {character.backstory ? (
              <motion.div
                id="character-backstory-content"
                data-testid="character-backstory"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2.5 p-3 rounded-xs bg-[#110f0d] border-l-2 border-[#eab308] text-xs sm:text-sm text-[#e0d8cc] leading-relaxed italic"
              >
                "{character.backstory}"
              </motion.div>
            ) : (
              <p id="character-backstory-placeholder" className="text-xs text-[#878074] italic mt-1 leading-relaxed">
                No origin tale recorded yet. Click <span className="text-[#c9a050] font-medium">"Generate Backstory"</span> to inscribe a unique one-to-two-sentence legend for {character.name}.
              </p>
            )}
          </div>

          {/* Bottom Card Action Footer */}
          <div className="relative z-10 pt-3 border-t border-[#c9a050]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[10px] text-[#736e65] uppercase tracking-widest text-center sm:text-left">
              Inscribed Card ID: <span className="font-mono text-[#a1998c]">{character.id.slice(0, 14)}</span>
            </div>

            {onSaveToDeck && (
              <button
                id="btn-save-to-deck-footer"
                data-testid="save-to-deck"
                aria-label="Save to Deck"
                type="button"
                onClick={() => onSaveToDeck(character)}
                className={`w-full sm:w-auto px-5 py-2 rounded-xs border text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  isSavedInDeck
                    ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50'
                    : 'border-[#c9a050] bg-[#221c15] text-[#c9a050] hover:bg-[#c9a050] hover:text-[#0c0c0c]'
                }`}
              >
                {isSavedInDeck ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                    <span>Save to Deck</span>
                    <span className="text-[10px] text-emerald-400 font-normal">✓ Saved</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Save to Deck</span>
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
