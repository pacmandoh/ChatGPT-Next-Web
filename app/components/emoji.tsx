import Image from "next/image";
import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";
import GeminiBotIcon from "../icons/googlegemini.svg";
import SolidGeminiBotIcon from "../icons/solid-googlegemini.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  return `https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/15.0.1/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model?.startsWith("gemini")) {
    return (
      <div className="no-dark">
        {props.model?.endsWith("vision") ? (
          <SolidGeminiBotIcon className="user-avatar" />
        ) : (
          <GeminiBotIcon className="user-avatar" />
        )}
      </div>
    );
  }
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <BlackBotIcon className="user-avatar" />
        ) : (
          <BotIcon className="user-avatar" />
        )}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
